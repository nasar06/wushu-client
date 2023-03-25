import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



const TeamMember = () => {

  const teamMembers = [
    {
      name: "Anowarul Rasel",
      role: "Head Instructor",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lorem at mauris dictum eleifend. Sed vitae luctus nibh. Sed finibus euismod lectus quis blandit. Aenean vel blandit metus. Praesent posuere ultricies ex, quis finibus metus hendrerit vitae. Cras venenatis, urna eget rutrum iaculis, est velit posuere enim, eu tincidunt sapien arcu ut nunc.",
      image: "https://i.ibb.co/XsXDWbJ/rasel.jpg",
      facebook: "https://www.facebook.com/anoarulrasel.rasel",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Anisur Rahman",
      role: "Assistant Instructor",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lorem at mauris dictum eleifend. Sed vitae luctus nibh. Sed finibus euismod lectus quis blandit. Aenean vel blandit metus. Praesent posuere ultricies ex, quis finibus metus hendrerit vitae. Cras venenatis, urna eget rutrum iaculis, est velit posuere enim, eu tincidunt sapien arcu ut nunc.",
      image: "https://i.ibb.co/58WC2vk/anis-removebg-preview.png",
      facebook: "https://www.facebook.com/anisur.rhoman.7",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Anamul Hasan",
      role: "Assistant Instructor",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lorem at mauris dictum eleifend. Sed vitae luctus nibh. Sed finibus euismod lectus quis blandit. Aenean vel blandit metus. Praesent posuere ultricies ex, quis finibus metus hendrerit vitae. Cras venenatis, urna eget rutrum iaculis, est velit posuere enim, eu tincidunt sapien arcu ut nunc.",
      image: "https://i.ibb.co/wwDnKPw/hasan.jpg",
      facebook: "https://www.facebook.com/anamul.hasan.336",
      twitter: "#",
      instagram: "#",
    },
    // Add additional team members as needed
  ];


  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                <div className="flex justify-center mt-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 mx-2"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 mx-2"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-500 mx-2"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMember;