import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  DollarSign, 
  Lightbulb, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Smartphone,
  Monitor,
  Globe,
  BarChart3,
  Eye,
  Target
} from 'lucide-react';

export default function AscendiorWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado correctamente!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ascendior</h1>
              <p className="text-sm text-gray-600">Software Solutions</p>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600">Inicio</a>
              <a href="#nosotros" className="text-gray-700 hover:text-emerald-600">Nosotros</a>
              <a href="#servicios" className="text-gray-700 hover:text-emerald-600">Servicios</a>
              <a href="#beneficios" className="text-gray-700 hover:text-emerald-600">Beneficios</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600">Inicio</a>
              <a href="#nosotros" className="text-gray-700 hover:text-emerald-600">Nosotros</a>
              <a href="#servicios" className="text-gray-700 hover:text-emerald-600">Servicios</a>
              <a href="#beneficios" className="text-gray-700 hover:text-emerald-600">Beneficios</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600">Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformamos tu <span className="text-emerald-600">negocio</span> con tecnología
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Desarrollamos soluciones de software personalizadas que impulsan el 
            crecimiento de tu empresa. Desde aplicaciones web hasta consultoría 
            tecnológica, convertimos tus ideas en realidad digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Contáctanos Ahora
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Ver Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0">
            <div>
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-sm text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">98%</div>
              <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-gray-600">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipo trabajando" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Sobre <span className="text-emerald-600">Ascendior</span>
              </h3>
              <p className="text-gray-600 mb-4">
                Somos una empresa especializada en desarrollo de software que transforma ideas en soluciones 
                tecnológicas innovadoras. Nuestro enfoque se centra en resolver problemas empresariales complejos a 
                través de la tecnología.
              </p>
              <p className="text-gray-600 mb-6">
                Con años de experiencia en el mercado, hemos ayudado a empresas de todos los tamaños a optimizar 
                sus procesos, reducir costos y acelerar su crecimiento mediante soluciones de software 
                personalizadas.
              </p>

              {/* Mission */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Nuestra Misión</h4>
                <p className="text-gray-600">
                  Empoderar a las empresas con tecnología de vanguardia que impulse su transformación digital y les 
                  permita alcanzar sus objetivos de negocio de manera eficiente y sostenible.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Enfoque en Resultados</h5>
                <p className="text-gray-600">
                  Nos centramos en entregar soluciones que generen valor real para tu negocio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Equipo Experto</h5>
                <p className="text-gray-600">
                  Contamos con desarrolladores senior especializados en las últimas tecnologías.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Entrega Puntual</h5>
                <p className="text-gray-600">
                  Cumplimos con los plazos establecidos sin comprometer la calidad del producto.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Calidad Garantizada</h5>
                <p className="text-gray-600">
                  Implementamos las mejores prácticas de desarrollo y testing riguroso.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Nuestros <span className="text-emerald-600">Servicios</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales que cubren todas las necesidades de 
              desarrollo y transformación digital de tu empresa.
            </p>
          </div>

          {/* Service 1 */}
          <div className="mb-12">
            <div className="h-48 rounded-lg relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Desarrollo de aplicaciones" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm -mt-8 relative z-10 mx-4">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Desarrollo de Aplicaciones Personalizadas
              </h4>
              <p className="text-gray-600 mb-6">
                Creamos aplicaciones móviles y web a medida que se adaptan perfectamente a los procesos 
                y necesidades específicas de tu empresa, garantizando una experiencia única para tus usuarios.
              </p>
              <button className="text-emerald-600 font-semibold flex items-center space-x-2 hover:text-emerald-700">
                <span>Más Información</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-8">
            <div className="h-48 rounded-lg relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm -mt-8 relative z-10 mx-4">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Desarrollo de Sitios Web Corporativos
              </h4>
              <p className="text-gray-600 mb-6">
                Diseñamos y desarrollamos sitios web profesionales que reflejan la identidad de tu marca y convierten 
                visitantes en clientes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600">Diseño Responsivo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600">SEO Optimizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600">CMS Integrado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600">Análisis de Rendimiento</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="text-emerald-600 font-semibold flex items-center space-x-2 hover:text-emerald-700">
                  <span>Más Información</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">Desde 2 semanas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Beneficios de Trabajar con <span className="text-emerald-600">Ascendior</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo nuestras soluciones tecnológicas pueden transformar tu negocio y 
              generar resultados medibles desde el primer día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Acelera tus Procesos</h4>
              <p className="text-gray-600 mb-4">
                Automatiza tareas repetitivas y optimiza flujos de trabajo para aumentar la productividad 
                hasta un 60%.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">60% más rápido</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Reduce Costos Operativos</h4>
              <p className="text-gray-600 mb-4">
                Elimina procesos manuales y reduce errores humanos, generando ahorros significativos en 
                costos operativos.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">40% menos costos</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Impulsa la Innovación</h4>
              <p className="text-gray-600 mb-4">
                Implementa tecnologías de vanguardia que posicionan tu empresa como líder en 
                innovación del sector.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">100% innovación</span>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Mejora la Toma de Decisiones</h4>
              <p className="text-gray-600 mb-4">
                Accede a datos en tiempo real y análisis avanzados para tomar decisiones informadas y 
                estratégicas.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Datos en tiempo real</span>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Garantiza la Seguridad</h4>
              <p className="text-gray-600 mb-4">
                Implementamos las mejores prácticas de seguridad para proteger tu información y la de 
                tus clientes.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">99.9% seguridad</span>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Mejora la Experiencia del Cliente</h4>
              <p className="text-gray-600 mb-4">
                Crea interfaces intuitivas y procesos fluidos que aumentan la satisfacción y fidelidad del 
                cliente.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">95% satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Nuestro Proceso de <span className="text-emerald-600">Trabajo</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seguimos una metodología probada que garantiza resultados exitosos en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Análisis</h4>
              <p className="text-gray-600">
                Evaluamos tus necesidades y procesos actuales
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Monitor className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Diseño</h4>
              <p className="text-gray-600">
                Creamos la arquitectura y diseño de la solución
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Desarrollo</h4>
              <p className="text-gray-600">
                Implementamos la solución con las mejores prácticas
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Implementación</h4>
              <p className="text-gray-600">
                Desplegamos y configuramos la solución en tu entorno
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Soporte</h4>
              <p className="text-gray-600">
                Brindamos soporte continuo y actualizaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Formulario de Contacto
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      placeholder="+34 600 123 456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.empresa}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="servicio"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.servicio}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="aplicaciones-moviles">Aplicaciones Móviles</option>
                    <option value="consultoria">Consultoría Tecnológica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows="4"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-8">Información de Contacto</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                    <p className="text-gray-600">ascendior@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Teléfono</h5>
                    <p className="text-gray-600">60257520</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Oficina</h5>
                    <p className="text-gray-600">Costa Rica</p>
                    <p className="text-gray-600">San Ramon, Alajuela</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Horario</h5>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ascendior</h3>
              <p className="text-gray-300 mb-6">
                Software Solutions
              </p>
              <p className="text-gray-400">
                Transformamos ideas en soluciones tecnológicas innovadoras. Especializados en desarrollo de software que 
                impulsa el crecimiento empresarial.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
                <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
                <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desarrollo de Aplicaciones</li>
                <li>Sitios Web Corporativos</li>
                <li>Consultoría Tecnológica</li>
                <li>Soporte y Mantenimiento</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ascendior Software Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
