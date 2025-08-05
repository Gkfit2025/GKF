import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Users, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
   <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8"> 
      {/* Header */}
      <header className="bg-[#e5773c] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/gkf-logo.webp?height=60&width=300"
                alt="GKF Logo1"
                width={300}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">GKF Madurai</h1>
                <p className="text-blue-200 text-sm">Healthcare Excellence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9943450401</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@gkfmadurai.in</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <a
              href="#"
              className="py-4 px-2 border-b-2 border-blue-400 text-blue-200 hover:text-white transition-colors"
            >
              Home
            </a>
            <a href="#" className="py-4 px-2 hover:text-blue-200 transition-colors">
              About Us
            </a>
            <a href="#" className="py-4 px-2 hover:text-blue-200 transition-colors">
              Services
            </a>
            <a href="#" className="py-4 px-2 hover:text-blue-200 transition-colors">
              Doctors
            </a>
            <a href="#" className="py-4 px-2 hover:text-blue-200 transition-colors">
              Facilities
            </a>
            <a href="#" className="py-4 px-2 hover:text-blue-200 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Health is Our <span className="text-blue-600">Priority</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Providing comprehensive healthcare services with state-of-the-art facilities and experienced medical
                professionals in Madurai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg">
                  Emergency Care
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="GKF Hospital"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Patients Served</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Expert Doctors</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with compassion and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cardiology</h3>
                <p className="text-gray-600">
                  Advanced cardiac care with state-of-the-art equipment and experienced cardiologists.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">General Medicine</h3>
                <p className="text-gray-600">Comprehensive primary care services for all your general health needs.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Surgery</h3>
                <p className="text-gray-600">Advanced surgical procedures with minimally invasive techniques.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                      123 Medical Street
                      <br />
                      Madurai, Tamil Nadu 625001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-gray-600">+91 9876543211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@gkfmadurai.in</p>
                    <p className="text-gray-600">appointments@gkfmadurai.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
                    <p className="text-red-600 font-semibold">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Book an Appointment</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Department</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select Department</option>
                        <option>Cardiology</option>
                        <option>General Medicine</option>
                        <option>Surgery</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="GKF Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">GKF Madurai</h3>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services to the community of Madurai with compassion and excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facilities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    General Medicine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Surgery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Medical Street, Madurai</p>
                <p>Tamil Nadu 625001</p>
                <p>Phone: +91 9876543210</p>
                <p>Email: info@gkfmadurai.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GKF Madurai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
