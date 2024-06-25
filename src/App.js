import React from 'react';
import './App.css'; // Importe seu arquivo CSS principal
import './style.css'; // Importe seu arquivo CSS de estilo
import imagem5 from './assets/imagem5.jpg'; // Ajuste o caminho da imagem conforme necessário
import imagem1 from './assets/imagem1.jpg'; // Ajuste o caminho da imagem conforme necessário
import imagem3 from './assets/imagem3.jpg'; // Ajuste o caminho da imagem conforme necessário
import imagem4 from './assets/imagem4.jpg'; // Ajuste o caminho da imagem conforme necessário
import praiaVideo from './assets/praia.mp4';

function App() {
  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
  };

  return (
    <div>
      <video className="background-video" autoPlay muted loop playsInline>
        <source src={praiaVideo} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <nav className="content">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        <div className="menu-items" id="menuItems">
          <a href="#products">
            <i className="fas fa-box"></i> Produtos
          </a>

          <a href="#special-offers">
            <i className="fas fa-tags"></i> Ofertas Especiais
          </a>

          <a href="#faq">
            <i className="fas fa-question-circle"></i> FAQ
          </a>

          <a href="#testimonials">
            <i className="fas fa-comment-alt"></i> Depoimentos
          </a>

          <a href="#Location">
            <i className="fas fa-map-marker-alt"></i> Localização
          </a>
        </div>
      </nav>

      <div className="content">
        <section id="home">
          <h1>Bem-vindo aos produtos</h1>
          <p></p>
        </section>

        <section id="products">
          <div className="product">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <img src={imagem5} alt="Descrição da Imagem" />
            <p></p>
            <p>Preço: R$ 25,00</p>
            <p>Desconto: 5%</p>
            <p>Preço com desconto: R$ 23,75</p>
            <a href="https://api.whatsapp.com/send?phone=13981430940&text=Olá! Gostaria de fazer um pedido." className="cta-button">Comprar Agora</a>
          </div>

          <div className="product">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <img src={imagem1} alt="Descrição da Imagem" />
            <p></p>
            <p>Preço: R$ 25,00</p>
            <p>Desconto: 5%</p>
            <p>Preço com desconto: R$ 23,75</p>
            <a href="https://api.whatsapp.com/send?phone=13981430940&text=Olá! Gostaria de fazer um pedido." className="cta-button">Comprar Agora</a>
          </div>

          <div className="product">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <img src={imagem3} alt="Descrição da Imagem" />
            <p></p>
            <p>Preço: R$ 25,00</p>
            <p>Desconto: 5%</p>
            <p>Preço com desconto: R$ 23,75</p>
            <a href="https://api.whatsapp.com/send?phone=13981430940&text=Olá! Gostaria de fazer um pedido." className="cta-button">Comprar Agora</a>
          </div>

          <div className="product">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <img src={imagem4} alt="Descrição da Imagem" />
            <p></p>
            <p>Preço: R$ 25,00</p>
            <p>Desconto: 5%</p>
            <p>Preço com desconto: R$ 23,75</p>
            <a href="https://api.whatsapp.com/send?phone=13981430940&text=Olá! Gostaria de fazer um pedido." className="cta-button">Comprar Agora</a>
          </div>
        </section>

        <section id="special-offers" className="info">
          <h2>Ofertas Especiais</h2>
          <div className="offer-item">
            <h3>Special Weekend: 20% Discount</h3>
            <p>Enjoy a 20% discount on all orders placed during weekends. Don't miss this limited time offer!</p>
          </div>
          <br />

          <div className="offer-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <br />

          <div className="offer-item">
            <p>Happy Hour: Buy One, Get Two</p>
            <p>Join happy hour every weekday from 5pm to 7pm and take advantage of the buy one, tier two offer on select items.</p>
          </div>
        </section>

        <section id="faq" className="faq">
          <h2>FAQ (Perguntas Frequentes)</h2>
          <div className="faq-item">
            <p>What are your delivery hours?</p>
            <p>We deliver from 11:00 AM to 10:00 PM, Monday through Sunday.</p>
          </div>
          <br />
          <div className="faq-item">
            <p>What is your delivery radius?</p>
            <p>We deliver within a 5 km radius from our location.</p>
          </div>
          <br />
          <div className="faq-item">
            <p>Do you offer vegetarian options?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <br />
          <div className="faq-item">
            <p>How can I place an order?</p>
            <p>You can place an order by clicking on the "Comprar Agora" button next to each product or by contacting us via WhatsApp at <a href="https://api.whatsapp.com/send?phone=13981430940&text=Olá! Gostaria de fazer um pedido.">(13) 981430940</a></p>
          </div>
          <br />
          <div className="faq-item">
            <p>Do you cater for events?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>

        <section id="contact" className="info">
          <h2>Contact Us:</h2>
          <br />
          <div className="contact-item">
            <p>WhatsApp: <a href="tel:+5513981430940">(13) 98143-0940</a></p>
          </div>
        </section>

        <section id="testimonials">
          <p>Testimonials</p>

          <div className="testimonial">
            <p><em>— Ana C., Sandwich Aficionado</em></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>

          <div className="testimonial">
            <p><em>— Lucas M., Skewer Connoisseur</em></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>

          <div className="testimonial">
            <p><em>— Ana R., Sweets Lover</em></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>

          <div className="testimonial">
            <p><em>— Carlos M., Satisfied Customer</em></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>

          <div className="testimonial">
            <p><em>— Laura T., Pie Admirer</em></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </div>
        </section>

        <section id="Location">
          <h2>Nossa Localização</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.292141156985!2d-122.0843372!3d37.4223663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806ae88fb55d%3A0xf8df5647f047ee56!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1614354140015!5m2!1sen!2sus"
            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </section>

        <form action="https://api.staticforms.xyz/submit" method="post">
          <input type="text" name="name" placeholder="Seu Nome" />
          <input type="email" name="email" placeholder="Seu Email" required />
          <input type="text" name="phone" placeholder="Seu Telefone" />
          <input type="text" name="company" placeholder="Sua Empresa" />
          <textarea name="message" placeholder="Sua Mensagem" required></textarea>
          <input type="text" name="honeypot" style={{ display: 'none' }} />
          <input type="hidden" name="accessKey" value="11d0b5ed-df07-4c34-ad75-45ea3e034c56" />
          <input type="hidden" name="subject" value="Formulário de Contato Enviado" />
          <input type="hidden" name="replyTo" value="" />
          <input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
          <input type="submit" value="Enviar" />
        </form>

        <footer>
          <div className="footer-content">
            <div className="footer-item">
              <p>Opening Hours</p>
              <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
              <br />
            </div>

            <p>Follow Us</p>
            <div className="social-icons">
              <a href=""><i className="fab fa-facebook-f"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
              <a href=""><i className="fab fa-linkedin"></i></a>
              <a href=""><i className="fab fa-telegram"></i></a>
              <a href=""><i className="fab fa-youtube"></i></a>
              <a href=""><i className="fab fa-whatsapp"></i></a>
              <a href=""><i className="fab fa-facebook-messenger"></i></a>
              <a href=""><i className="fab fa-spotify"></i></a>
            </div>
          </div>
          <br />

          <div className="footer-item">
            <p>Delivery Area</p>
            <p>We deliver within a 5 km radius.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

         
