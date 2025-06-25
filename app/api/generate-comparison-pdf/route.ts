import { type NextRequest, NextResponse } from "next/server"
import { jsPDF } from "jspdf"
import "jspdf-autotable"

// Extend jsPDF type to include autoTable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

export async function POST(request: NextRequest) {
  try {
    const { vehicles, showDifferencesOnly, generatedAt } = await request.json()

    // Create new PDF document
    const doc = new jsPDF()

    // Set up fonts and colors
    const primaryColor = [37, 99, 235] // Blue-600
    const secondaryColor = [75, 85, 99] // Gray-600
    const lightGray = [249, 250, 251] // Gray-50

    // Add header
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 30, "F")

    // Company logo and name
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    doc.text("Valvora Motors", 20, 20)

    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text("Relatório de Comparação de Veículos", 20, 25)

    // Add generation date
    doc.setTextColor(...secondaryColor)
    doc.setFontSize(10)
    const date = new Date(generatedAt).toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    doc.text(`Gerado em: ${date}`, 20, 40)

    let yPosition = 50

    // Vehicle overview section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("Veículos Comparados", 20, yPosition)
    yPosition += 10

    // Vehicle summary table
    const vehicleHeaders = ["Veículo", "Preço", "Ano", "Combustível", "Potência"]
    const vehicleData = vehicles.map((vehicle: any) => [
      vehicle.name,
      vehicle.price + (vehicle.originalPrice ? ` (${vehicle.originalPrice})` : ""),
      vehicle.year,
      vehicle.fuel,
      vehicle.power,
    ])

    doc.autoTable({
      startY: yPosition,
      head: [vehicleHeaders],
      body: vehicleData,
      theme: "grid",
      headStyles: {
        fillColor: primaryColor,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 10,
        cellPadding: 5,
      },
      alternateRowStyles: {
        fillColor: lightGray,
      },
    })

    yPosition = (doc as any).lastAutoTable.finalY + 20

    // Specifications comparison
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("Especificações Detalhadas", 20, yPosition)
    yPosition += 10

    // General specifications
    const generalSpecs = [
      ["Especificação", ...vehicles.map((v: any) => v.name)],
      ["Preço", ...vehicles.map((v: any) => v.price)],
      ["Ano", ...vehicles.map((v: any) => v.year)],
      ["Quilometragem", ...vehicles.map((v: any) => `${v.mileage} km`)],
      ["Carroçaria", ...vehicles.map((v: any) => v.bodyType)],
      ["Cor", ...vehicles.map((v: any) => v.color)],
      ["Portas", ...vehicles.map((v: any) => v.doors)],
      ["Lugares", ...vehicles.map((v: any) => v.seats)],
      ["Garantia", ...vehicles.map((v: any) => v.warranty)],
    ]

    doc.autoTable({
      startY: yPosition,
      head: [generalSpecs[0]],
      body: generalSpecs.slice(1),
      theme: "grid",
      headStyles: {
        fillColor: primaryColor,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 9,
        cellPadding: 4,
      },
      alternateRowStyles: {
        fillColor: lightGray,
      },
    })

    yPosition = (doc as any).lastAutoTable.finalY + 15

    // Performance specifications
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Performance", 20, yPosition)
    yPosition += 5

    const performanceSpecs = [
      ["Especificação", ...vehicles.map((v: any) => v.name)],
      ["Motor", ...vehicles.map((v: any) => v.engine)],
      ["Potência", ...vehicles.map((v: any) => v.power)],
      ["Combustível", ...vehicles.map((v: any) => v.fuel)],
      ["Transmissão", ...vehicles.map((v: any) => v.transmission)],
      ["Consumo", ...vehicles.map((v: any) => v.consumption)],
      ["Emissões CO2", ...vehicles.map((v: any) => v.emissions)],
    ]

    doc.autoTable({
      startY: yPosition,
      head: [performanceSpecs[0]],
      body: performanceSpecs.slice(1),
      theme: "grid",
      headStyles: {
        fillColor: primaryColor,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 9,
        cellPadding: 4,
      },
      alternateRowStyles: {
        fillColor: lightGray,
      },
    })

    // Add new page for features if needed
    if ((doc as any).lastAutoTable.finalY > 250) {
      doc.addPage()
      yPosition = 20
    } else {
      yPosition = (doc as any).lastAutoTable.finalY + 15
    }

    // Features comparison
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Equipamentos e Características", 20, yPosition)
    yPosition += 5

    // Get all unique features
    const allFeatures = Array.from(new Set(vehicles.flatMap((v: any) => v.features || [])))

    const featuresData = allFeatures.map((feature) => [
      feature,
      ...vehicles.map((vehicle: any) => (vehicle.features?.includes(feature) ? "✓" : "✗")),
    ])

    doc.autoTable({
      startY: yPosition,
      head: [["Característica", ...vehicles.map((v: any) => v.name)]],
      body: featuresData,
      theme: "grid",
      headStyles: {
        fillColor: primaryColor,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 8,
        cellPadding: 3,
      },
      alternateRowStyles: {
        fillColor: lightGray,
      },
      columnStyles: {
        0: { cellWidth: 80 },
      },
    })

    // Add footer with contact information
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)

      // Footer background
      doc.setFillColor(...lightGray)
      doc.rect(0, 280, 210, 17, "F")

      // Contact information
      doc.setTextColor(...secondaryColor)
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.text("Valvora Motors | Tel: (555) 123-4567 | Email: info@valvoramotors.com", 20, 290)
      doc.text("123 Auto Drive, Springfield, ST 12345 | www.valvoramotors.com", 20, 294)

      // Page number
      doc.text(`Página ${i} de ${pageCount}`, 180, 290)
    }

    // Generate PDF buffer
    const pdfBuffer = doc.output("arraybuffer")

    // Return PDF as response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="comparacao-veiculos-${new Date().toISOString().split("T")[0]}.pdf"`,
      },
    })
  } catch (error) {
    console.error("Erro ao gerar PDF:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
