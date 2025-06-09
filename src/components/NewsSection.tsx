import ArticleCard from "./ArticleCard";

const NewsSection = () => {
  const articles = [
    {
      date: "Del 07/05",
      title: "Pensamiento computacional programador",
      description: "Aprendé a programar con este nuevo curso del CFP 408...",
    },
    {
      date: "Del 10/02",
      title: "Nuevos cursos gratuitos",
      description: "¡ABRIMOS LAS INSCRIPCIONES PARA LOS NUEVOS CURSOS...",
    },
    {
      date: "Del 16/04",
      title: "Mantenimiento domiciliario",
      description: "¡NUEVOS CURSOS GRATUITOS en @cfp408eduardofernandez...️",
    },
    {
      date: "Del 09/02",
      title: "¿Sabes que es un centro de formación profesional?",
      description: "¡TENEMOS UN NUEVO CFP EN TIGRE! 🐯...",
    },
    {
      date: "Del 30/04",
      title: "Diseño Grafico 2",
      description: "💻💚 NUEVO CURSO DEL CFP 408...h",
    },
    {
      date: "Del 10/04",
      title: "Estudiantes armaron computadoras",
      description:
        "🙌🏽 Ya están disponibles para ser utilizadas por los estudiantes...",
    },
    {
      date: "Del 03/04",
      title: "Programar sin experienciaprevia",
      description:
        "💚 Conocé los nuevos cursos del CFP 408 Eduardo Fernández...",
    },
    {
      date: "Del 19/02",
      title: "Sumamos dos nuevoscursos gratuitos",
      description: "⌚️ Con nuevos horarios📍 Se cursarán en la Undelta.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex justify-center">
              <ArticleCard
                date={article.date}
                title={article.title}
                description={article.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
