/**
 * Configuración de la Ficha Técnica del Inmueble
 * Edificio en San Luis, Teusaquillo, Bogotá
 */
const propertyConfig = {
  seo: {
    title: "Edificio en Venta, Teusaquillo Bogotá | Gran Rentabilidad y Potencial",
    description: "¿Buscas inversión segura en Bogotá? Venta de edificio híbrido en Teusaquillo rentando $18.9M. 4 pisos: local, clínica, oficinas y 20 hab. ideales para Airbnb.",
    keywords: "EdificioEnVentaTeusaquillo, InversionInmobiliariaBogota, EdificioRentandoSanLuis, BienesRaicesColombia, VecyBienesRaices, ModeloAirbnbBogota, AltaRentabilidad, RentasCortas",
    propertyId: "ID-BOG-ET01",
    ogUrl: "https://edificio-teusaquillo-bogota.netlify.app/",
    ogImage: "assets/3.jpg",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  infoPrincipal: {
    headerBadge: "🚀 ¡Activo de Alta Rentabilidad en Teusaquillo! 🏢",
    tituloHtml: "Edificio Multifuncional - San Luis",
    precioVenta: "$3.000.000.000",
    valorAdmin: "$18.960.000 /mes",
    labelExtra: "💰 Renta Mensual Actual"
  },

  detalles: [
    { label: "Área Const.", value: "1.068 m²", icon: "📐" },
    { label: "Lote", value: "12 x 30 m", icon: "📏" },
    { label: "Remodelado", value: "Hace 2 años", icon: "🛠️" },
    { label: "Antigüedad", value: "Estructura Antisísmica", icon: "🏗️" },
    { label: "Estrato", value: "4 (Comercial/Mixto)", icon: "✨" },
    { label: "Estado", value: "Remodelado - Triple AAA", icon: "⭐" },
    { label: "ROI Est.", value: "7.58% Anual", icon: "📈" },
    { label: "Pisos", value: "4 Niveles", icon: "🏢" },
    { label: "Unidades", value: "20 Hab + Ofis + Local", icon: "🔑" }
  ],

  caracteristicasInternas: [
    { name: "Local 40m² (1º Piso)", emoji: "🏪" },
    { name: "Clínica 9 Consultorios (1º)", emoji: "⚕️" },
    { name: "Recepción y Sala Espera", emoji: "🛋️" },
    { name: "9 Oficinas Ocupadas (2º)", emoji: "💼" },
    { name: "11 Habitaciones (3º Piso)", emoji: "🛏️" },
    { name: "9 Habitaciones + Estudio (4º)", emoji: "💻" },
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
    titulo: "🚀 Análisis de Rentabilidad y Potencial",
    texto: `
    <div class="roi-item" style="text-align: center; border-top: 1px solid rgba(212,175,55,0.3); padding-top: 20px;">
      <p style="margin-bottom: 15px; font-size: 1.15em; color: #3e2723;"><strong>💸 Análisis de Activo Híbrido:</strong></p>
      <ul style="list-style: none; padding: 0; margin-bottom: 20px; display: inline-block; text-align: left;">
        <li style="margin-bottom: 8px;">✅ <strong>Renta Actual:</strong> $18.960.000 (Local + Clínica + Oficinas).</li>
        <li style="margin-bottom: 8px;">✅ <strong>Potencial Inmediato:</strong> +$14.000.000 (20 Unidades Airbnb).</li>
        <li style="margin-bottom: 8px;">🚀 <strong>Proyección Total:</strong> $33.000.000 / mes (ROI > 12%).</li>
      </ul>
      <div style="text-align: center;">
          <a href="analisis.html" class="btn-analisis">
              📋 VER MÁS DETALLES DEL EDIFICIO
          </a>
      </div>
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
📏 *Lote:* 12x30m | *Área:* 1.068 m²
🏢 *Construcción:* 4 Pisos (Antisísmica)

🤑 *Renta Actual Total:* $18.960.000/mes
📈 *ROI Anual:* 7.58%
🚀 *Proyección:* +$30 Millones/mes

✅ *Distribución Real:*
• *1° Piso:* Local ($2.4M) + Clínica ($2.9M) + Patio Amplio
• *2° Piso:* 9 Oficinas Ocupadas ($4.6M)
• *3° y 4° Piso:* 20 Habitaciones Total (10 Rentando + 10 por explotar) + Zona Estudio

🔗 *Ver Fotos y Ficha Técnica:*
https://edificio-teusaquillo-bogota.netlify.app/

#VentaEdificioBogota #InversionInmobiliaria #Teusaquillo #EdificioRentando #BienesRaicesColombia #ColivingBogota #AirbnbBogota #AltaRentabilidad`
  }
};

