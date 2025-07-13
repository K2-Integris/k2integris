import ScrollSeperator from "@/components/ScrollSeperator";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  return (
    <>
      <header>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

       <article className="wrapper">
        <h1>
          Empowering<br />Businesses to <span>Reach</span><br /> New Digital <span>Heights</span>
        </h1>

        <ScrollSeperator />

        <button className="cta">
          Request a Consultation
        </button>
       </article>

       <div className="transition"></div>
      </header>

      <section id="service">
        <div className="overlay"></div>

        <article className="wrapper">
          <h2>
            A Strategic <span>Partner</span>,<br />
            Not Just a Vendor
          </h2>
        </article>

        <ServiceCards />

        <article className="wrapper info">
          <div>
            <h3>
              Brand Identity
            </h3>

            <p>
              Forge a distinctive and memorable identity for your company with our expertise in brand creation, thereby strengthening your brand personality and establishing a lasting connection with your audience.
            </p>
          </div>

          <div>
            <h3>
              HOSTING
            </h3>

            <p>
              To ensure the best availability for your project, we have invested in a self-managed hosting infrastructure, allowing us to stay at the forefront in terms of quality and support.
            </p>
          </div>

          <div>
            <h3>
              Migration
            </h3>

            <p>
              Are you seeking a new digital partner or looking to transfer an existing project to our agency for further development and/or maintenance? We provide assistance throughout the entire process.
            </p>
          </div>
        </article>
      </section>

      
      <section id="contact-cta">
        <article className="wrapper">
          <h2>
            Let's talk about<br /><span>your project</span>
          </h2>

          <Link href="contact">
            GET IN TOUCH
          </Link>
        </article>
      </section>
    </>
  );
}

/*
<section id="testemonials">
        <div className="overlay"></div>

        <div className="wrapper">
          <h2>
            Trust our <br /><span>testimonials</span>
          </h2>
        </div>
        <div className="testimonials-wrapper">
          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>

          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>

          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>

          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>

          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>

          <article className="testemonial">

            <div className="profile-box">
              <div className="profile-picture">
                <Image src="/images/ThomasGrausgruber.png" width={50} height={50} alt="Thomas Grausgruber" />
              </div>
              <p className="profile-name">
                Thomas Grausgruber
              </p>
            </div>

            <div className="stars-box">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L15.3064 8.2918H24.3882L17.0409 13.4164L19.8473 21.7082L12.5 16.5836L5.15268 21.7082L7.95911 13.4164L0.611794 8.2918H9.69357L12.5 0Z" fill="#BC976F"/>
              </svg>
            </div>

            <p className="comment">
              Great results in no time! Simply impressive! Top! Lorem ipsum dolor sit amet igmund siegmund freud
            </p>

          </article>
        </div>
      </section>

*/