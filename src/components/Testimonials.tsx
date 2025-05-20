import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: '"Maravilhoso esse plano, muito bom o atendimento, mesmo presencial nunca fui atendido por médicos excelentes como esses, espero em que fui atendido até agora, e acredito que será sempre cada um melhor que o outro."',
    name: 'João Soares',
    role: 'Cliente',
  },
  {
    id: 2,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: '"Experiência incrível! Atendimento rápido e médicos muito atenciosos. A plataforma é fácil de usar e resolvi minha consulta sem precisar sair de casa."',
    name: 'Maria Silva',
    role: 'Cliente',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Depoimentos</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center px-4 py-8">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-lg text-gray-700 italic mb-6 max-w-2xl mx-auto">
                    {testimonial.text}
                  </p>
                  <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;