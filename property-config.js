/**
 * Configuración de la Ficha Técnica del Inmueble
 * Edificio en San Luis, Teusaquillo, Bogotá
 */
const propertyConfig = {
  seo: {
    title: "Edificio en Venta - San Luis Teusaquillo, Bogotá | Gran Inversión",
    description: "Edificio en Venta Teusaquillo Bogotá - $3.000 Millones - 1.068 m² - Rentando aprox $20M/mes - Ideal Inversionistas - Uso Mixto (Local, Oficinas, Airbnb).",
    keywords: "Venta Edificio Teusaquillo, Inversión Inmobiliaria Bogotá, Edificio Renta Bogotá, Venta Edificio San Luis, Propiedad Raíz Comercial Bogotá",
    ogUrl: "https://edificio-teusaquillo-bogota.netlify.app/",
    ogImage: "assets/1.png",
    author: "Vecy Bienes Raíces",
    copyright: "Vecy Bienes Raíces"
  },
  
  infoPrincipal: {
    headerBadge: "🚀 ¡Máquina de Renta Inmobiliaria! 🏢",
    tituloHtml: "Edificio en San Luis - Teusaquillo",
    precioVenta: "$3.000.000.000",
    valorAdmin: "$17 - $20 Millones aprox.",
    labelExtra: "💰 Rentabilidad Mensual"
  },

  detalles: [
    { label: "Área Const.", value: "1.068 m²", icon: "📐" },
    { label: "Lote", value: "12 x 30 m", icon: "📏" },
    { label: "Pisos", value: "4 Pisos", icon: "🏢" },
    { label: "Rentabilidad", value: "~0.7% Mes", icon: "📈" },
    { label: "Baños", value: "15", icon: "🚽" },
    { label: "Uso", value: "Mixto", icon: "🏙️" },
    { label: "Remodelado", value: "Hace 2 años", icon: "🛠️" },
    { label: "Estructura", value: "Antisísmica", icon: "🏗️" },
    { label: "Barrio", value: "San Luis", icon: "📍" }
  ],

  caracteristicasInternas: [
    { name: "Local Comercial (1º Piso)", emoji: "🏪" },
    { name: "Clínica Odontológica", emoji: "🦷" },
    { name: "9 Consultorios", emoji: "⚕️" },
    { name: "9 Oficinas (2º Piso)", emoji: "💼" },
    { name: "9 Habitaciones Airbnb (3º)", emoji: "🛏️" },
    { name: "11 Habitaciones (4º)", emoji: "🛠️" },
    { name: "Coworking", emoji: "💻" },
    { name: "Cocinas Equipadas", emoji: "🍳" },
    { name: "Servicios Independientes", emoji: "🛢️" },
    { name: "Tanques de Reserva", emoji: "💧" },
    { name: "Cableado Renovado", emoji: "⚡" },
    { name: "Tubería Renovada", emoji: "🚿" },
    { name: "Acabados Triple AAA", emoji: "⭐" }
  ],
  destacadoInterno: "Distribución optimizada para <strong>altos ingresos</strong>. Cuenta con local, clínica, oficinas y modelo Coliving/Airbnb. <br>¡Estructura <strong>antisísmica</strong> y remodelación completa de redes!",

  caracteristicasExternas: [
    { name: "Ubicación Estratégica", emoji: "📍" },
    { name: "Cerca Transmilenio", emoji: "🚍" },
    { name: "Zona Universitaria", emoji: "🎓" },
    { name: "Centros Comerciales", emoji: "🛍️" },
    { name: "Restaurantes Cerca", emoji: "🍽️" },
    { name: "Discotecas / Ocio", emoji: "🎉" },
    { name: "Vías Principales", emoji: "🛣️" },
    { name: "Zona de Alta Demanda", emoji: "📈" }
  ],
  destacadoUbicacion: "Ubicado en <strong>San Luis - Teusaquillo</strong> (Carrera 18 # 60 - 51), el corazón de Bogotá. Rodeado de universidades y comercio, garantizando una <strong>ocupación constante</strong>.",

  mapa: {
    // Embed genérico de San Luis, Teusaquillo (Cercano a Cra 18 # 60-51)
    urlEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7644783775!2d-74.073!3d4.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3f3f3f3f3f%3A0x3f3f3f3f3f3f3f3f!2sSan%20Luis%2C%20Teusaquillo%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1678886400000",
    titulo: "Ubicación exacta: Carrera 18 # 60 - 51"
  },

  descripcionFinal: {
    titulo: "🚀 Proyección de Inversión (ROI)",
    texto: `💰 <strong>Rentabilidad Actual:</strong> Ingresos netos entre <strong>$17 a $20 Millones mensuales</strong> (ROI anual aprox 8.27%).
    <br><br>
    📈 <strong>Potencial de Expansión:</strong>
    <ul>
      <li>Amoblar las 9 habitaciones del 4º piso.</li>
      <li>Convertir las 9 oficinas del 2º piso en Airbnb.</li>
      <li>Adecuar el local de la clínica en más habitaciones.</li>
      <li>Construir +8 habitaciones en el patio.</li>
    </ul>
    <br>
    👉 <strong>Proyección:</strong> ¡Podría superar los <strong>$30 Millones mensuales</strong> con estas adecuaciones! Un inmueble que crece contigo.`
  },

  multimedia: {
    videoUrl: "assets/video.mp4",
    videoThumbnail: "",
    imagesCount: 22, 
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    // Sobreescribimos la lista para manejar la extensión mixta (1.png, resto .jpg)
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
    whatsappText: `🏢 *EDIFICIO EN VENTA - TEUSAQUILLO, BOGOTÁ*

📍 Ubicación: Cra 18 # 60 - 51 (San Luis)
💲 Precio: $3.000.000.000
💰 Rentabilidad: $17 - $20 Millones/mes (Actualmente)
📈 Proyección: +$30 Millones/mes
📐 Área: 1.068 m² (4 Pisos)
🚽 Baños: 15
🏗️ Lote: 12 x 30 m

✅ *Distribución Rentable:*
- Local + Clínica Odontológica
- 9 Oficinas
- 20 Habitaciones (Airbnb/Coliving)
- Coworking
- Patio amplio (Con potencial de ampliación)

*🔗 Ver Video y Fotos aquí:*
https://edificio-teusaquillo-bogota.netlify.app/`
  }
};
