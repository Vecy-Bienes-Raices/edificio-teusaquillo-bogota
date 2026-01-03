/**
 * Configuración de la Ficha Técnica del Inmueble
 * Edificio en San Luis, Teusaquillo, Bogotá
 */
const propertyConfig = {
  seo: {
    title: "Edificio en Venta y Rentando - San Luis, Teusaquillo | Alta Rentabilidad",
    description: "Inversión Inmobiliaria Bogotá: Edificio en San Luis Teusaquillo. Rentando $18.96M/mes. 4 Pisos, Local, Clínica, Oficinas y Airbnb. Gran potencial.",
    keywords: "Edificio en Venta Teusaquillo, Inversión Inmobiliaria Bogotá, Edificio Rentando San Luis, Venta Propiedad Raíz, Edificio con Local y Oficinas",
    ogUrl: "https://edificio-teusaquillo-bogota.netlify.app/",
    ogImage: "assets/1.png",
    author: "",
    copyright: ""
  },
  
  infoPrincipal: {
    headerBadge: "🚀 ¡Máquina de Renta Inmobiliaria! 🏢",
    tituloHtml: "Edificio en San Luis - Teusaquillo",
    precioVenta: "$3.000.000.000",
    valorAdmin: "$18.960.000 / Mes Promedio",
    labelExtra: "💰 Rentabilidad Actual (Demostrable)"
  },

  detalles: [
    { label: "Área Const.", value: "1.068 m²", icon: "📐" },
    { label: "Lote", value: "12 x 30 m", icon: "📏" },
    { label: "Rentabilidad", value: "$18.96M/mes", icon: "💵" },
    { label: "Pisos", value: "4 Pisos", icon: "🏢" },
    { label: "Remodelado", value: "Hace 2 años", icon: "🛠️" },
    { label: "Baños", value: "15", icon: "🚽" },
    { label: "Uso", value: "Mixto/Comercial", icon: "🏙️" },
    { label: "ROI Est.", value: "~8% Anual", icon: "📈" },
    { label: "Ubicación", value: "San Luis, Teusaquillo", icon: "📍" }
  ],

  caracteristicasInternas: [
    { name: "Local 40m² (1º Piso)", emoji: "🏪" },
    { name: "Clínica 9 Consultorios (1º)", emoji: "⚕️" },
    { name: "Recepción y Sala Espera", emoji: "🛋️" },
    { name: "9 Oficinas Ocupadas (2º)", emoji: "💼" },
    { name: "11 Habitaciones + Lavandería (3º)", emoji: "🛏️" },
    { name: "9 Habitaciones + Coworking (4º)", emoji: "💻" },
    { name: "Cocinas Equipadas por Piso", emoji: "🍳" },
    { name: "Zona Lavandería (3º y 4º)", emoji: "🧺" },
    { name: "Servicios Independientes", emoji: "🛢️" },
    { name: "Tanques de Reserva", emoji: "💧" },
    { name: "Cableado Estructurado", emoji: "⚡" },
    { name: "Acabados Triple AAA", emoji: "⭐" }
  ],
  destacadoInterno: "Propiedad de <strong>Inversión Híbrida:</strong> Combina la estabilidad de contratos a largo plazo (Local, Clínica, Oficinas) con el <strong>alto flujo de caja</strong> del modelo Airbnb/Coliving en los pisos superiores. <br>¡Versatilidad única en el sector!",

  caracteristicasExternas: [
    { name: "Ubicación Estratégica", emoji: "📍" },
    { name: "Cerca a Transmilenio", emoji: "🚍" },
    { name: "Zona Universitaria", emoji: "🎓" },
    { name: "Zona Comercial", emoji: "🛍️" },
    { name: "Restaurantes y Bares", emoji: "🍽️" },
    { name: "Alta Demanda Alquiler", emoji: "📈" },
    { name: "Vías Principales", emoji: "🛣️" },
    { name: "Barrio San Luis", emoji: "🏘️" }
  ],
  destacadoUbicacion: "Ubicado en <strong>San Luis, Teusaquillo</strong>, un sector de altísima demanda por su cercanía a universidades, comercio, discotecas y transporte masivo. Ideal para modelos de renta corta o largo plazo.",

  mapa: {
    // Embed dinámico usando la dirección del barrio San Luis, Teusaquillo
    urlEmbed: "https://maps.google.com/maps?q=Barrio+San+Luis%2C+Teusaquillo%2C+Bogot%C3%A1&t=&z=16&ie=UTF8&iwloc=&output=embed",
    titulo: "Ubicación: Barrio San Luis, Teusaquillo"
  },

  descripcionFinal: {
    titulo: "📊 Reporte de Rentabilidad y Proyección",
    texto: `
    <div class="roi-item">
      💰 <strong>Ingresos Mensuales Actuales: $18.960.000 COP</strong>
      <ul class="roi-list">
        <li><strong>Local (40m²):</strong> $2.400.000</li>
        <li><strong>Clínica Odontológica:</strong> $2.900.000 (Utilidad Neta <small>*Después de equipos</small>)</li>
        <li><strong>Oficinas (2º Piso):</strong> $4.660.000 (Ocupación Total)</li>
        <li><strong>Airbnb/Coliving (3º y 4º):</strong> $9.000.000 Promedio (<small>Fluctúa $8-10M</small>)</li>
      </ul>
    </div>
    
    <div class="roi-item projection" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
      🚀 <strong>Potencial de Crecimiento:</strong>
      <p style="margin-top: 5px; font-size: 14px;">Actualmente hay <strong>10 habitaciones disponibles</strong> para amoblar y rentar en el modelo Airbnb. Al activarlas, la rentabilidad mensual superará fácilmente los <strong>$30.000.000 COP</strong>.</p>
    </div>`
  },

  multimedia: {
    videoUrl: "assets/video.mp4",
    videoThumbnail: "",
    imagesCount: 22, 
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: [
        "assets/1.png",
        "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", 
        "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", 
        "assets/10.jpg", "assets/11.jpg", "assets/12.jpg", "assets/13.jpg", 
        "assets/14.jpg", "assets/15.jpg", "assets/16.jpg", "assets/17.jpg", 
        "assets/18.jpg", "assets/19.jpg", "assets/20.jpg", "assets/21.jpg", 
        "assets/22.jpg"
    ]
  },

  share: {
    whatsappText: `🏢 *EDIFICIO EN VENTA - SAN LUIS, TEUSAQUILLO*
💰 *Precio:* $3.000.000.000 COP

📍 *Ubicación:* San Luis, Teusaquillo, Bogotá
📐 *Área:* 1.068 m² (Lote 12x30m)
💵 *Renta Actual:* $18.960.000 / Mes (Promedio)
🚀 *Proyección:* +$30 Millones/mes

✅ *Distribución de Ingresos:*
- Local Comercial (40m²)
- Clínica Odontológica (9 Consultorios + Recepción)
- 9 Oficinas (2º Piso - Alquiladas)
- 20 Habitaciones (Modelo Airbnb/Coliving - Pisos 3 y 4)
- Coworking y Lavandería

🔗 *Ver Reporte Detallado y Fotos:*
https://edificio-teusaquillo-bogota.netlify.app/`
  }
};

