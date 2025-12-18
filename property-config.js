/**
 * Configuración de la Ficha Técnica del Inmueble
 * Edificio en San Luis, Teusaquillo, Bogotá
 */
const propertyConfig = {
  seo: {
    title: "Edificio en Venta y Rentando - San Luis, Teusaquillo | Inversión Alta Rentabilidad",
    description: "Edificio en Venta Teusaquillo Bogotá. Rentando $17-$20M/mes. 1.068 m², 4 pisos, local, oficinas, apartaestudios. Proyección +$30M/mes.",
    keywords: "Venta Edificio Teusaquillo, Edificio Rentando Bogotá, Inversión Inmobiliaria San Luis, Edificio Uso Mixto Bogotá, Venta Propiedad Raíz",
    ogUrl: "https://edificio-teusaquillo-bogota.netlify.app/",
    ogImage: "assets/1.png",
    author: "",
    copyright: ""
  },
  
  infoPrincipal: {
    headerBadge: "🚀 ¡Máquina de Renta Inmobiliaria! 🏢",
    tituloHtml: "Edificio en San Luis - Teusaquillo",
    precioVenta: "$3.000.000.000",
    valorAdmin: "$17 - $20 Millones/mes",
    labelExtra: "💰 Rentabilidad Actual (Neta Est.)"
  },

  detalles: [
    { label: "Área Const.", value: "1.068 m²", icon: "📐" },
    { label: "Lote", value: "12 x 30 m", icon: "📏" },
    { label: "Pisos", value: "4 Pisos", icon: "🏢" },
    { label: "Remodelado", value: "Hace 2 años", icon: "🛠️" },
    { label: "Baños", value: "15", icon: "🚽" },
    { label: "Uso", value: "Mixto/Comercial", icon: "🏙️" },
    { label: "Estructura", value: "Antisísmica", icon: "🏗️" },
    { label: "ROI Est.", value: "8.27% Anual", icon: "📈" },
    { label: "Ubicación", value: "San Luis, Teusaquillo", icon: "📍" }
  ],

  caracteristicasInternas: [
    { name: "Local Comercial (1º Piso)", emoji: "🏪" },
    { name: "Clínica Odontológica (1º)", emoji: "🦷" },
    { name: "Patio Amplio (Potencial +8 Habs)", emoji: "🌳" },
    { name: "9 Oficinas Arrendadas (2º)", emoji: "💼" },
    { name: "9 Habitaciones Airbnb (3º)", emoji: "🛏️" },
    { name: "Coworking (3º)", emoji: "💻" },
    { name: "11 Habitaciones (4º)", emoji: "🛠️" },
    { name: "3 Habs Amobladas (4º)", emoji: "🛋️" },
    { name: "Servicios Independientes", emoji: "🛢️" },
    { name: "4 Tanques Reserva", emoji: "💧" },
    { name: "Tubería/Cableado Nuevo", emoji: "⚡" },
    { name: "Acabados Triple AAA", emoji: "⭐" }
  ],
  destacadoInterno: "Edificio de <strong>4 pisos</strong> con distribución estratégica: Local y Clínica en 1º piso, Oficinas en 2º, y modelo <strong>Airbnb/Coliving</strong> en 3º y 4º piso. <br>¡Tuberías y cableado renovados hace 2 años!",

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
    titulo: "🚀 Proyección: De $20M a $30M Mensuales",
    texto: `
    <div class="roi-item">
      💰 <strong>Rentabilidad Actual:</strong> Genera entre <strong>$17 a $20 Millones mensuales netos</strong> (aprox. 8.27% ROI anual).
    </div>
    
    <div class="roi-item">
      📈 <strong>Potencial de Expansión ("Máquina de Renta"):</strong>
      <ul class="roi-list">
        <li>Amoblar las 9 habitaciones restantes del 4º piso.</li>
        <li>Convertir las 9 oficinas del 2º piso en habitaciones Airbnb.</li>
        <li>Adecuar los 9 consultorios de la clínica (1º piso) en habitaciones.</li>
        <li>Construir +8 nuevas habitaciones en el patio trasero.</li>
      </ul>
    </div>
    
    <div class="roi-item projection">
      👉 <strong>Oportunidad:</strong> Con estas adecuaciones, la renta podría superar los <strong>$30.000.000 COP mensuales</strong>. ¡Un activo sólido que crece contigo!
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
🤑 *Renta Actual:* $17 - $20 Millones/mes
🚀 *Proyección:* +$30 Millones/mes

✅ *Distribución:*
- 1º: Local + Clínica Odontológica + Patio (con potencial)
- 2º: 9 Oficinas
- 3º: 9 Habitaciones Airbnb + Coworking
- 4º: 11 Habitaciones (3 amobladas)

🔗 *Ver Fotos y Video:*
https://edificio-teusaquillo-bogota.netlify.app/`
  }
};

