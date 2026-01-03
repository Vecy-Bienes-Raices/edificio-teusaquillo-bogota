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
    headerBadge: "🚀 ¡Activo de Alta Rentabilidad en Teusaquillo! 🏢",
    tituloHtml: "Edificio Multifuncional - San Luis",
    precioVenta: "$3.000.000.000",
    valorAdmin: "$18.960.000 /mes",
    labelExtra: "💰 Renta Mensual Actual"
  },

  detalles: [
    { label: "ROI Est.", value: "7.58% Anual", icon: "📈" },
    { label: "Pisos", value: "4 Niveles", icon: "🏢" },
    { label: "Unidades", value: "30+ Espacios", icon: "" },
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
    titulo: "🚀 Análisis de Rentabilidad Detallado",
    texto: `
    <div class="roi-item">
      <strong>💰 Ingresos Mensuales Actuales:</strong>
      <ul class="roi-list">
        <li><strong>Local Comercial (40m²):</strong> $2.400.000</li>
        <li><strong>Clínica Odontológica (9 Consult.):</strong> $2.900.000 (Neto)</li>
        <li><strong>Piso 2 (9 Oficinas):</strong> $4.660.000</li>
        <li><strong>Pisos 3 y 4 (20 Habs + Airbnb):</strong> $9.000.000 (Promedio)</li>
      </ul>
      <div class="projection" style="margin-top: 10px; font-weight: bold; color: #15803d;">
        ROI ACTUAL: 7.58% Anual <span style="font-weight: normal; color: #333;">(Sobre inversión de $3.000M)</span>
      </div>
    </div>

    <div class="roi-item">
      📈 <strong>Potencial de Expansión:</strong> Al activar las 10 habitaciones actualmente desocupadas, la proyección de renta supera los <strong>$30.000.000 COP mensuales</strong>.
    </div>

    <div class="roi-item">
      <p>Este edificio es una oportunidad única para inversionistas que buscan un activo con flujo de caja inmediato y un potencial de crecimiento significativo. Su ubicación estratégica en Teusaquillo, Bogotá, garantiza una alta demanda para todos sus espacios, desde el local comercial y la clínica, hasta las oficinas y las habitaciones de coliving/Airbnb.</p>
      <p>La versatilidad de sus espacios permite adaptarse a diversas estrategias de renta, maximizando la rentabilidad. Los acabados Triple AAA y el cableado estructurado aseguran una operación eficiente y de bajo mantenimiento.</p>
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
🏢 *Construcción:* 4 Pisos
🤑 *Renta Actual:* $18.960.000/mes
📈 *ROI Total:* 7.58% Anual
🚀 *Proyección:* +$30 Millones/mes

✅ *Distribución:*
• *1° Piso:* Local ($2.4M) + Clínica ($2.9M) + Patio
• *2° Piso:* 9 Oficinas rentando ($4.6M)
• *3° Piso:* 11 Habitaciones Airbnb + Cocina
• *4° Piso:* 9 Habitaciones + Coworking + WiFi/TV
*(Pisos 3 y 4 promedian $9M mensuales)*

🔗 *Ver Fotos y Video:*
https://edificio-teusaquillo-bogota.netlify.app/`
  }
};

