"use client";

import { motion } from "framer-motion";

export default function Home() {

  const links = {
    quote: "https://wa.me/917905525175?text=Hello%20OLIVE%20DENTAL,%20I%20want%20quotation%20for%20dental%20equipment.",
    setup: "https://wa.me/917905525175?text=Hello%20OLIVE%20DENTAL,%20I%20want%20complete%20clinic%20setup.",
    chairs: "https://wa.me/917905525175?text=Hello%20OLIVE%20DENTAL,%20I%20am%20interested%20in%20Dental%20Chairs.",
    service: "https://wa.me/917905525175?text=Hello%20OLIVE%20DENTAL,%20I%20need%20repair%20or%20service.",
    amc: "https://wa.me/917905525175?text=Hello%20OLIVE%20DENTAL,%20I%20want%20AMC%20details.",
    handpiece: "https://wa.me/917905525175?text=Hello%20I%20need%20Handpieces%20and%20RVG%20Sensors.",
    scaler: "https://wa.me/917905525175?text=Hello%20I%20need%20Scalers%20and%20Endo%20Motors.",
    imaging: "https://wa.me/917905525175?text=Hello%20I%20need%20OPG%20CBCT%20XRay.",
    steril: "https://wa.me/917905525175?text=Hello%20I%20need%20Autoclave%20UV%20Compressor."
  };

  return (
    <div className="bg-[#0B0F19] text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-10 py-4 flex justify-between items-center bg-[#0B0F19]/90 backdrop-blur border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg">
            <img src="/logo.png" className="h-10" />
          </div>
          <div>
            <h1 className="text-sm font-semibold">OLIVE DENTAL</h1>
            <p className="text-xs text-blue-400">Redefining Dental Excellence</p>
          </div>
        </div>

        <a href={links.quote} className="bg-blue-600 px-5 py-2 rounded-md">
          Contact
        </a>
      </nav>

      {/* HERO (UPDATED 🔥) */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]">
               Complete Dental & Equipment Solutions
          </h1>

          <p className="text-blue-400 mt-2">
              Clinics • Hospitals • Dental Colleges
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            OLIVE DENTAL & SURGICALS provides complete dental equipment solutions
            including supply, installation, repair, and maintenance. With over
            15 years of experience, we help clinics, hospitals, and dental colleges
            build efficient and reliable setups tailored to their needs.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a href={links.quote} className="bg-blue-600 px-6 py-2 rounded-md">
              Get Quote
            </a>

            <a href={links.setup} className="border border-gray-600 px-6 py-2 rounded-md">
              Clinic Setup
            </a>
          </div>
        </div>

        {/* IMAGE GRID 🔥 */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/chair1.jpg" className="rounded-xl h-40 object-cover" />
          <img src="/chair2.jpg" className="rounded-xl h-40 object-cover" />
          <img src="/chair3.jpg" className="rounded-xl h-40 object-cover" />
          <img src="/chair4.jpg" className="rounded-xl h-40 object-cover" />
        </div>

      </section>

      {/* SERVICES (UNCHANGED) */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Sales & Installation",
              desc: "Complete dental equipment setup and installation.",
              link: links.chairs
            },
            {
              title: "Repair & Maintenance",
              desc: "Reliable repair service for all dental equipment.",
              link: links.service
            },
            {
              title: "Chair Lamination & Rexine",
              desc: "Rexine replacement and finishing services.",
              link: links.chairs
            },
            {
              title: "AMC Contracts",
              desc: "Annual maintenance support for long-term use.",
              link: links.amc
            }
          ].map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-[#111827] rounded-lg border border-white/10 hover:border-blue-400 transition"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

              <a href={item.link} className="text-blue-400 text-sm">
                Enquire Now →
              </a>
            </motion.div>
          ))}

        </div>
      </section>

      {/* EQUIPMENT (UNCHANGED) */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-10">Equipment Range</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { title: "Dental Chairs", desc: "Hydraulic, semi and fully automatic chairs.", link: links.chairs },
            { title: "Handpieces & RVG", desc: "Air rotor, contra angle, sensors.", link: links.handpiece },
            { title: "Scalers & Endo", desc: "Scalers and implant motors.", link: links.scaler },
            { title: "Imaging Systems", desc: "OPG, CBCT & X-Ray.", link: links.imaging },
            { title: "Sterilization", desc: "Autoclave, UV & compressors.", link: links.steril },
            { title: "Clinic Setup", desc: "Complete setup solutions.", link: links.setup }
          ].map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-[#111827] rounded-lg border border-white/10 hover:border-blue-400 transition"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

              <a href={item.link} className="text-blue-400 text-sm">
                Enquire Now →
              </a>
            </motion.div>
          ))}

        </div>
      </section>
      {/* TESTIMONIALS */}
<section className="px-6 pb-20 max-w-6xl mx-auto">
  <h2 className="text-3xl text-center mb-10">What Our Clients Say</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        name: "Dr. Alok Kumar Rai",
        text: "Excellent service and genuine pricing. Installation was smooth and support is very reliable."
      },
      {
        name: "Dr. Bhawna Ranjan",
        text: "We purchased complete clinic setup. Everything was delivered on time and quality is top-notch."
      },
      {
        name: "Shekhar Dental Hospital, Lucknow",
        text: "Highly professional team with strong technical knowledge. Their AMC service is very helpful."
      }
    ].map((t,i)=>(
      <div key={i} className="p-6 bg-[#111827] rounded-lg border border-white/10">

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          “{t.text}”
        </p>

        <h4 className="text-blue-400 font-semibold">
          {t.name}
        </h4>

      </div>
    ))}

  </div>
</section>
{/* WHY CHOOSE US */}
<section className="px-6 pb-20 max-w-6xl mx-auto">
  <h2 className="text-3xl text-center mb-10">Why Choose Us</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "15+ Years Experience",
        desc: "Extensive industry experience ensures reliable guidance, correct product selection, and professional execution for every setup."
      },
      {
        title: "Complete Solutions",
        desc: "From equipment supply to installation and maintenance, we provide end-to-end support without needing multiple vendors."
      },
      {
        title: "Best Pricing",
        desc: "We offer competitive pricing across all products without compromising on quality or service standards."
      },
      {
        title: "Customized Setup",
        desc: "Dental chairs and clinic setups can be tailored according to your specific requirements and space."
      },
      {
        title: "Service Support",
        desc: "Quick response repair and maintenance services to ensure minimal downtime in your clinic operations."
      },
      {
        title: "Trusted by Clinics & Hospitals",
        desc: "We work with clinics, hospitals, and dental institutions, delivering reliable solutions across different scales."
      }
    ].map((item,i)=>(
      <div key={i} className="p-6 bg-[#111827] rounded-lg border border-white/10">

        <h3 className="font-semibold mb-2 text-blue-400">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</section>
{/* TRUST STRIP */}
<section className="py-10 border-t border-b border-white/10 text-center">

  <p className="text-gray-400 text-sm mb-6">
    Trusted by Clinics, Hospitals & Dental Institutions
  </p>

  <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">

    <span>✔ 15+ Years Experience</span>
    <span>✔ Pan India Service</span>
    <span>✔ Genuine Products</span>
    <span>✔ Fast Support</span>
    <span>✔ Custom Clinic Setup</span>

  </div>

</section>

{/* FINAL CTA */}
<section className="py-16 text-center">

  <h2 className="text-3xl font-semibold mb-4">
    Ready to Setup or Upgrade Your Dental Clinic?
  </h2>

  <p className="text-gray-400 mb-6">
    Get expert guidance, best pricing, and complete support from our experienced team.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">

    <a
      href={links.quote}
      className="bg-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
    >
      Get Free Quote
    </a>

    <a
      href={links.setup}
      className="border border-gray-500 px-6 py-3 rounded-md text-lg hover:bg-white hover:text-black transition"
    >
      Setup My Clinic
    </a>

  </div>

</section>

      {/* CONTACT */}
      <section className="py-16 text-center bg-[#111827]">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p>📞 7905525175</p>
        <p>Lucknow, Uttar Pradesh</p>

        <a href={links.quote} className="bg-blue-600 px-6 py-2 mt-4 inline-block rounded-md">
          WhatsApp Now
        </a>
      </section>

      {/* FLOATING */}
      <a href={links.quote} className="fixed bottom-24 md:bottom-20 right-6 z-50">
        <div className="bg-blue-600 p-4 rounded-full shadow-xl hover:scale-110 transition">
          💬
        </div>
      </a>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0B0F19]/95 border-t border-white/10 px-4 py-3 flex justify-end gap-3">
        <a href={links.quote} className="bg-blue-600 px-4 py-2 rounded-md text-sm">
          Get Quote
        </a>
        <a href={links.setup} className="border border-gray-500 px-4 py-2 rounded-md text-sm">
          Setup
        </a>
      </div>

    </div>
  );
}