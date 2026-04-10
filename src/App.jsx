import { useEffect, useState } from "react";

const inlineLogo =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%2220%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M256%2068v92m-58-34l58%2034%2058-34M164%20156h184M110%20196l146%2084%20146-84M110%20196v120l146%2084%20146-84V196m-146%2084v152%22/%3E%3Cpolygon%20points%3D%22256%20224%20298%20248%20298%20296%20256%20320%20214%20296%20214%20248%22%20fill%3D%22white%22%20stroke%3D%22white%22/%3E%3C/svg%3E";

const shopProducts = [
  {
    id: "01",
    name: "Modern Flower Vase",
    category: "Home / Decor",
    price: "5 BHD",
    badge: "Home Piece",
    tags: ["Home / Decor"],
    colorOptions: ["Black", "White", "Beige", "Terracotta"],
    description: "A modern decorative vase designed for clean shelves, tables, and minimalist spaces.",
    details: [
      "Height: 15 cm",
      "Lower Diameter: 9 cm",
      "Upper Diameter: 4 cm",
      "Custom color available",
    ],
  },
  {
    id: "02",
    name: "Medieval Chess Set",
    category: "Board Games",
    price: "12 BHD",
    badge: "Statement Piece",
    tags: ["Board Games", "Toys", "Decor"],
    description: "A medieval-inspired chess set that works as both a playable board game and a display piece.",
    details: [
      "Board Size: 32 cm x 32 cm",
      "Maximum King Height: 9 cm",
      "Suitable for play and display",
      "Custom color available",
    ],
  },
  {
    id: "03",
    name: "Pringles Dispenser",
    category: "Tools",
    price: "3 BHD",
    badge: "Functional",
    tags: ["Tools"],
    colorOptions: ["Black", "White", "Red", "Yellow"],
    description: "A simple functional dispenser made to serve Pringles in a cleaner and more playful way.",
    details: [
      "Functional print",
      "Made for snack serving",
      "Custom color available",
    ],
  },
  {
    id: "04",
    name: "Gear Ball",
    category: "Toys",
    price: "4 BHD",
    badge: "Interactive",
    tags: ["Toys"],
    colorOptions: ["Black", "White", "Blue", "Green"],
    description: "An interactive printed toy with a gear-based form that feels playful and display-worthy.",
    details: [
      "Interactive toy piece",
      "Decorative and playful design",
      "Custom color available",
    ],
  },
];

function Header({ page, setPage, cartCount }) {
  const isHome = page === "home";

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="WEAVE logo" className="h-16 w-16 invert object-contain" />
          <div className="text-lg tracking-[0.35em]">WEAVE</div>

          <div className="ml-4 flex items-center gap-3 text-xs text-white/60">
            <img src="https://flagcdn.com/w40/bh.png" alt="Bahrain flag" className="h-4 w-6 rounded-sm object-cover" />
            <span>BHD</span>
            <div className="flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-white transition hover:border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.5 2.5 2.5 16.5 0 19m0-19c-2.5 2.5-2.5 16.5 0 19M3 12h18" />
              </svg>
              <span>EN</span>
            </div>
          </div>
        </div>

        {isHome ? (
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <button type="button" onClick={() => setPage("shop")} className="transition hover:text-white">Shop</button>
            <button type="button" onClick={() => setPage("custom")} className="transition hover:text-white">Custom</button>
            <button type="button" onClick={() => setPage("cart")} className="transition hover:text-white">Cart {cartCount > 0 ? `(${cartCount})` : ""}</button>
            <button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-white">Contact</button>
          </nav>
        ) : (
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <button type="button" onClick={() => setPage("home")} className="transition hover:text-white">Home</button>
            {page === "shop" ? (
              <button type="button" onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-white">Categories</button>
            ) : page === "custom" ? (
              <button type="button" onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-white">Form</button>
            ) : null}
            <button type="button" onClick={() => setPage("cart")} className="transition hover:text-white">Cart {cartCount > 0 ? `(${cartCount})` : ""}</button>
            <button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="transition hover:text-white">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <>
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="text-2xl tracking-[0.4em]">Contact Us | WEAVE</div>
          <div className="mt-2 text-sm text-white/45">Manama, Bahrain • Ready-made products and custom-built work</div>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
            <div>Email: <a href="mailto:bhweave@gmail.com" className="hover:text-white">bhweave@gmail.com</a></div>
            <div>Phone: <a href="tel:+97339221555" className="hover:text-white">+973 39221555</a></div>
            <div className="flex items-center gap-2">
              <span>WhatsApp:</span>
              <a href="https://wa.me/97339221555" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.42 0 .06 5.36.06 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.94 11.94 0 005.85 1.49h.01c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.2-3.54-8.39z" />
                </svg>
                <span>Chat with us</span>
              </a>
            </div>
            <div>Instagram: <a href="https://instagram.com/weave.bh" target="_blank" rel="noopener noreferrer" className="hover:text-white">@weave.bh</a></div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/97339221555"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WEAVE on WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-black/85 px-3 py-2 text-sm text-white/85 shadow-lg backdrop-blur-md transition hover:border-white/30 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.42 0 .06 5.36.06 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.94 11.94 0 005.85 1.49h.01c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.2-3.54-8.39z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}

function HomePage({ setPage, openProduct }) {
  const [selectedHomeSection, setSelectedHomeSection] = useState("shop");
  const featuredProducts = shopProducts.slice(0, 3);
  const steps = ["Send your idea", "Review design details", "Approve the concept", "Print and deliver"];

  return (
    <>
      <main>
      <section className="mx-auto grid max-w-7xl gap-4 md:gap-10 px-6 pb-4 pt-10 md:grid-cols-[1.15fr_0.85fr] md:pb-8 md:pt-24">
  <div className="order-2 flex flex-col justify-center md:order-1">
    <h1 className="mt-2 md:mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">We Weave it into Reality</h1>
    <p className="mt-4 md:mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
      Built In Bahrain
    </p>

    <div className="mt-8 md:mt-14 flex flex-wrap gap-4">
      <button
        onClick={() => setSelectedHomeSection("shop")}
        className={`rounded-2xl px-6 py-3 text-sm font-medium transition ${selectedHomeSection === "shop" ? "bg-white text-black shadow-lg" : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"}`}
      >
        Shop Products
      </button>
      <button
        onClick={() => setSelectedHomeSection("custom")}
        className={`rounded-2xl px-6 py-3 text-sm font-medium transition ${selectedHomeSection === "custom" ? "bg-white text-black shadow-lg" : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"}`}
      >
        Request Custom Design
      </button>
    </div>
  </div>

  <div className="order-1 flex items-center justify-center md:order-2 md:justify-center -mb-6 md:mb-0">
    <img src="/logo.svg" alt="WEAVE logo" className="h-64 w-64 invert object-contain md:h-96 md:w-96" />
  </div>
</section>

        {selectedHomeSection === "shop" ? (
          <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">Featured Products</div>
              <button onClick={() => setPage("shop")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/5">View Full Shop</button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <div key={product.id} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.05]">
                  <div className="flex h-56 items-end justify-between border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6">
                    <div className="text-4xl font-semibold text-white/20">{product.id}</div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">{product.badge}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/35">{product.category}</div>
                    <h3 className="mt-3 text-xl font-medium">{product.name}</h3>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="text-lg font-medium">{product.price}</div>
                      <button onClick={() => openProduct(product)} className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5">View Product</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section id="custom-section" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="mb-8">
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">How custom orders move from idea to delivery</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {steps.map((step, index) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => index === 0 && setPage("custom")}
                  className={`group rounded-[1.75rem] border p-6 text-left transition ${index === 0 ? "cursor-pointer border-white bg-white text-black shadow-lg hover:scale-[1.02]" : "cursor-default border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.05]"}`}
                >
                  <div className={`text-sm uppercase tracking-[0.28em] ${index === 0 ? "text-black/60" : "text-white/35"}`}>0{index + 1}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-medium">{step}</div>
                    {index === 0 && <span className="ml-4 text-sm font-medium transition group-hover:translate-x-1">→</span>}
                  </div>
                  {index === 0 && <div className="mt-3 text-xs opacity-70">Start here</div>}
                </button>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function ShopPage({ setPage, openProduct, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const categories = ["All Products", "Home / Decor", "Board Games", "Decor", "Tools", "Toys"];
  const products =
    selectedCategory === "All Products"
      ? shopProducts
      : shopProducts.filter((p) => p.category === selectedCategory || p.tags?.includes(selectedCategory));

  return (
    <>
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-4 md:gap-10 px-6 py-6 md:grid-cols-[1.1fr_0.9fr] md:py-20">
           <div className="order-2 flex flex-col justify-center md:order-1">
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/55">Ready-Made Collection</div>
              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] md:text-7xl">We Weave it into Reality</h1>
          
            </div>
           <div className="order-1 flex items-center justify-center md:order-2">
              <img src="/logo.svg" alt="WEAVE logo" className="h-64 w-64 invert object-contain md:h-96 md:w-96" />
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-6 py-6 md:py-14">
          <div className="mb-6">
            <div className="text-sm uppercase tracking-[0.3em] text-white/40">Categories</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Shop by collection</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-3 text-sm transition ${selectedCategory === category ? "border-white bg-white text-black" : "border-white/15 text-white/70 hover:border-white/35 hover:bg-white/5 hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 pb-10 pt-2 md:pb-24">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">Products</div>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Featured ready-for-sale items</h2>
            </div>
            <div className="text-sm text-white/45">{products.length} products shown</div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.05]">
                <div className="flex h-72 items-end justify-between border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6">
                  <div className="text-5xl font-semibold text-white/20">{product.id}</div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">{product.badge}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/35">{product.category}</div>
                  <h3 className="mt-3 text-xl font-medium">{product.name}</h3>
                 
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="text-lg font-medium">{product.price}</div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => openProduct(product)} className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5">View Product</button>
                      <button type="button" onClick={() => addToCart(product)} className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button onClick={() => setPage("home")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/5">Back to Home</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CustomInquiryPage({ setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Custom product",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_m1jyc37",
          template_id: "template_e0fy9u6",
          user_id: "Z8y4whBgwK8qgdjr-",
          template_params: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            type: formData.type,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Email send failed");
      }

      setSubmitStatus({ type: "success", message: "Your request was sent successfully." });
      setFormData({
        name: "",
        phone: "",
        email: "",
        type: "Custom product",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Something went wrong while sending your request." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_1fr] md:py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/55">Custom Inquiry</div>
              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] md:text-7xl">Let’s build your idea</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">Tell WEAVE what you need and we’ll shape it into a custom design built around your purpose, dimensions, and style.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/97339221555" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02]">Chat on WhatsApp</a>
                <button onClick={() => setPage("home")} className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5">Back to Home</button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">Contact Priority</div>
              <h2 className="mt-3 text-3xl font-semibold">Reach us directly</h2>
              <div className="mt-8 space-y-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-white/45">Email</div><a href="mailto:bhweave@gmail.com" className="mt-1 block text-base text-white hover:text-white/80">bhweave@gmail.com</a></div>
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-white/45">Phone</div><a href="tel:+97339221555" className="mt-1 block text-base text-white hover:text-white/80">+973 39221555</a></div>
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-white/45">Instagram</div><a href="https://instagram.com/weave.bh" target="_blank" rel="noopener noreferrer" className="mt-1 block text-base text-white hover:text-white/80">@weave.bh</a></div>
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry-form" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.3em] text-white/40">Custom Form</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Tell us about your request</h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/60">Full Name</label>
                <input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30" required />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Phone / WhatsApp</label>
                <input value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} type="text" placeholder="e.g. +973 ..." className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30" required />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Email</label>
                <input value={formData.email} onChange={(e) => handleChange("email", e.target.value)} type="email" placeholder="Your email" className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30" required />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Project Type</label>
                <select value={formData.type} onChange={(e) => handleChange("type", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30">
                  <option>Custom product</option>
                  <option>Functional part</option>
                  <option>Gift / display item</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-white/60">Project Description</label>
                <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} rows="6" placeholder="Tell us what you want to make, dimensions, style, quantity, and any useful details." className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30" required />
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-4">
                <button type="submit" disabled={isSubmitting} className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
                <a href="https://wa.me/97339221555" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5">Or send on WhatsApp</a>
              </div>
              <div className="md:col-span-2 text-sm text-white/45">We’ll respond within 24 hours</div>
              {submitStatus.message ? (
                <div className={`md:col-span-2 rounded-2xl border px-4 py-3 text-sm ${submitStatus.type === "success" ? "border-white/20 bg-white/[0.04] text-white" : "border-white/10 bg-white/[0.02] text-white/75"}`}>
                  {submitStatus.message}
                </div>
              ) : null}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductPage({ product, setPage, openProduct, addToCart }) {
  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colorOptions?.[0] || "");
  useEffect(() => {
    setSelectedColor(product?.colorOptions?.[0] || "");
  }, [product]);

  if (!product) return null;

  const mediaItems = [
    { id: 1, type: "image", label: "Front View" },
    { id: 2, type: "image", label: "Angle View" },
    { id: 3, type: "image", label: "Detail View" },
    { id: 4, type: "video", label: "Short Video" },
  ];

  const details = product.details || [];

const goToPreviousMedia = () => {
  setActiveMedia((current) => (current === 0 ? mediaItems.length - 1 : current - 1));
};

const goToNextMedia = () => {
  setActiveMedia((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
};

  return (
    <>
      <main>
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <button type="button" onClick={() => setPage("shop")} className="text-sm text-white/60 transition hover:text-white">← Back to Shop</button>
          </div>

          <div id="product-gallery" className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:grid-cols-[1fr_1fr] md:pb-20">
            <div>
             <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
  <div className="relative flex h-[420px] items-end justify-between rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-8">
    <button
      type="button"
      onClick={goToPreviousMedia}
      className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white transition hover:bg-black/65"
      aria-label="Previous image"
    >
      ←
    </button>

    <div>
      <div className="text-xs uppercase tracking-[0.28em] text-white/35">
        {mediaItems[activeMedia].type === "video" ? "Video Preview" : "Image Preview"}
      </div>
      <div className="mt-4 text-5xl font-semibold text-white/15">{product.id}</div>
      <div className="mt-3 text-lg text-white/55">{mediaItems[activeMedia].label}</div>
      <div className="mt-6 text-sm text-white/35">
        {activeMedia + 1} / {mediaItems.length}
      </div>
    </div>

    <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">
      {product.badge}
    </div>

    <button
      type="button"
      onClick={goToNextMedia}
      className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white transition hover:bg-black/65"
      aria-label="Next image"
    >
      →
    </button>
  </div>
</div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">{product.category}</div>
              <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-6xl">{product.name}</h1>
              <div className="mt-6 text-2xl font-medium">{product.price}</div>
             

              <ul className="mt-8 space-y-3 text-sm leading-7 text-white/70">
                {details.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {product.colorOptions?.length ? (
                <div className="mt-8 max-w-xs">
                  <label className="mb-2 block text-sm text-white/60">Color</label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                  >
                    {product.colorOptions.map((color) => (
                      <option key={color}>{color}</option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`https://wa.me/97339221555?text=${encodeURIComponent(`Hi WEAVE, I’m interested in ${product.name}${selectedColor ? ` in ${selectedColor}` : ""}.`)}`} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02]">Order on WhatsApp</a>
                <button type="button" onClick={() => addToCart(product, selectedColor)} className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5">Add to Cart</button>
                <button type="button" onClick={() => setPage("custom")} className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5">Ask About This Product</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">Related Products</div>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">You may also like</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {shopProducts.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
              <div key={item.id} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                <div className="flex h-56 items-end justify-between border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6">
                  <div className="text-4xl font-semibold text-white/20">{item.id}</div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/45">{item.badge}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/35">{item.category}</div>
                  <h3 className="mt-3 text-xl font-medium">{item.name}</h3>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="text-lg font-medium">{item.price}</div>
                    <button type="button" onClick={() => openProduct(item)} className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/5">View Product</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CartPage({ cartItems, setPage, updateCartQuantity, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + Number.parseFloat(item.price) * item.quantity, 0);

  return (
    <>
      <main>
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/40">Cart</div>
              <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Your selected products</h1>
            </div>
            <button onClick={() => setPage("shop")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/5">Continue Shopping</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-white/60">Your cart is empty for now.</div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.cartKey} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.28em] text-white/35">{item.category}</div>
                        <div className="mt-2 text-xl font-medium">{item.name}</div>
                        <div className="mt-2 text-sm text-white/50">Unit price: {item.price}</div>
                        {item.selectedColor ? <div className="mt-1 text-sm text-white/50">Color: {item.selectedColor}</div> : null}
                      </div>

                      <div className="flex flex-col items-start gap-4 md:items-end">
                        <div className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2">
                          <button type="button" onClick={() => updateCartQuantity(item.cartKey, item.quantity - 1)} className="h-8 w-8 rounded-full border border-white/10 text-sm transition hover:bg-white/5">−</button>
                          <span className="min-w-[2rem] text-center text-sm font-medium">{item.quantity}</span>
                          <button type="button" onClick={() => updateCartQuantity(item.cartKey, item.quantity + 1)} className="h-8 w-8 rounded-full border border-white/10 text-sm transition hover:bg-white/5">+</button>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-lg font-medium">{(Number.parseFloat(item.price) * item.quantity).toFixed(2)} BHD</div>
                          <button type="button" onClick={() => removeFromCart(item.cartKey)} className="text-sm text-white/55 transition hover:text-white">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="text-sm uppercase tracking-[0.3em] text-white/40">Summary</div>
                <div className="mt-6 flex items-center justify-between text-white/70"><span>Items</span><span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
                <div className="mt-4 flex items-center justify-between text-xl font-medium"><span>Total</span><span>{total.toFixed(2)} BHD</span></div>
                <a href={`https://wa.me/97339221555?text=${encodeURIComponent(`Hi WEAVE, I’d like to order these items: ${cartItems.map((item) => `${item.name} x${item.quantity}`).join(", ")}.`)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02]">Checkout on WhatsApp</a>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function WeaveWebsiteCombinedPreview() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(shopProducts[0]);
  const [cartItems, setCartItems] = useState([]);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  const addToCart = (product, selectedColor = "") => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id && (item.selectedColor || "") === selectedColor);
      if (existingItem) {
        return current.map((item) => item.id === product.id && (item.selectedColor || "") === selectedColor ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { ...product, selectedColor, quantity: 1, cartKey: `${product.id}-${selectedColor || "default"}-${Date.now()}` }];
    });
  };

  const updateCartQuantity = (cartKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      setCartItems((current) => current.filter((item) => item.cartKey !== cartKey));
      return;
    }
    setCartItems((current) => current.map((item) => item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item));
  };

  const removeFromCart = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selectedProduct]);

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Header page={page} setPage={setPage} cartCount={cartItems.length} />
      {page === "home" ? (
        <HomePage setPage={setPage} openProduct={openProduct} />
      ) : page === "shop" ? (
        <ShopPage setPage={setPage} openProduct={openProduct} addToCart={addToCart} />
      ) : page === "custom" ? (
        <CustomInquiryPage setPage={setPage} />
      ) : page === "cart" ? (
        <CartPage cartItems={cartItems} setPage={setPage} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
      ) : (
        <ProductPage product={selectedProduct} setPage={setPage} openProduct={openProduct} addToCart={addToCart} />
      )}
    </div>
  );
}
