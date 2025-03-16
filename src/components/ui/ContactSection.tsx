
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Button from '../common/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="headline">Hubungi Kami</h2>
          <p className="subheadline">
            Tim kami siap membantu Anda dengan segala pertanyaan tentang aplikasi kasir kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subjek pesan Anda"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
              </div>
              <Button type="submit" fullWidth>
                Kirim Pesan
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-8 animate-slide-in-right">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telepon</h4>
                    <p className="text-muted-foreground mt-1">+62 123 4567 890</p>
                    <p className="text-muted-foreground">Senin - Jumat, 08:00 - 17:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground mt-1">info@kasirmonochrome.id</p>
                    <p className="text-muted-foreground">support@kasirmonochrome.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Kantor</h4>
                    <p className="text-muted-foreground mt-1">
                      Jl. Merdeka No. 123, Jakarta Selatan,<br />
                      Jakarta 12345, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Live Chat</h3>
              <p className="text-muted-foreground mb-6">
                Butuh bantuan segera? Chat dengan tim support kami yang siap membantu Anda.
              </p>
              <Button variant="outline" fullWidth className="flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Mulai Chat</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
