import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    descripcion: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-[#E8E8E8] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-[#003060] text-5xl font-black tracking-[3.2px] font-roboto">
            Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <Input
                  name="nombre"
                  placeholder="Nombre..."
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="h-12 text-2xl bg-white border-none text-left pl-4 italic font-thin tracking-[1.6px] placeholder:text-black font-roboto focus-visible:ring-0"
                />
              </div>

              {/* Apellido */}
              <div>
                <Input
                  name="apellido"
                  placeholder="Apellido..."
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="h-12 text-2xl bg-white border-none text-left pl-4 italic font-thin tracking-[1.6px] placeholder:text-black font-roboto focus-visible:ring-0"
                />
              </div>

              {/* DNI */}
              <div>
                <Input
                  name="dni"
                  placeholder="DNI..."
                  value={formData.dni}
                  onChange={handleInputChange}
                  className="h-12 text-2xl bg-white border-none text-left pl-4 italic font-thin tracking-[1.6px] placeholder:text-black font-roboto focus-visible:ring-0"
                />
              </div>

              {/* Telefono */}
              <div>
                <Input
                  name="telefono"
                  placeholder="Telefono..."
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="h-12 text-2xl bg-white border-none text-left pl-4 italic font-thin tracking-[1.6px] placeholder:text-black font-roboto focus-visible:ring-0"
                />
              </div>

              {/* Descripcion */}
              <div>
                <Textarea
                  name="descripcion"
                  placeholder="Describenos tu problema..."
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  className="min-h-[184px] text-2xl bg-white border-none text-left pl-4 pt-4 italic font-thin tracking-[1.6px] placeholder:text-black resize-none font-roboto focus-visible:ring-0"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-8">
                <Button
                  type="submit"
                  variant="ghost"
                  className="text-black text-3xl font-medium tracking-[2px] hover:bg-transparent hover:text-black/80 px-0 h-auto font-roboto"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>

          {/* Contact image */}
          <div className="flex justify-center">
            <div className="w-full max-w-[762px] h-[546px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-xl">Imagen de Contacto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
