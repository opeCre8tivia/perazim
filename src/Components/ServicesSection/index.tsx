import React from "react";
import ImageCard from "../Atomic/ImageCard";
import HorizontalImageCard from "../Atomic/HorizontalImageCard";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <div
      id="services"
      className="w-full h-fit flex justify-between items-center flex-wrap gap-4 md:gap-2 pt-20 pb-20 pl-6 pr-6  bg-no-repeat bg-cover"
    >
      {/* <HorizontalImageCard /> */}
      {/* bg-[url('/bg-orange.png')] */}
      <ImageCard
        title="Manned guarding"
        caption="We understand the importance of safeguarding our clients' premises and ensuring the utmost protection. As per our clients' requests, we provide a professional and reliable guard deployment service tailored to their specific needs. Our team of highly trained and experienced security guards is equipped with the skills, knowledge, and vigilance required to maintain a secure environment. They diligently monitor access points, patrol the premises, and promptly respond to any suspicious activity or potential threats. Our guards are trained to handle various situations with professionalism and composure, offering a reassuring presence that deters unauthorized individuals and maintains order. With a strong focus on client satisfaction, we strive to deliver exceptional security services that prioritize the safety and well-being of our clients and their premises."
        uri="/gate-guard.png"
      />
      <ImageCard
        title="Investigations"
        caption="We offer a comprehensive investigation service designed to uncover and resolve various types of issues. Whether it's corporate fraud, employee misconduct, intellectual property theft, or suspicious activities, our team of skilled investigators is equipped to handle it all. We employ a meticulous approach, utilizing advanced techniques and tools to gather evidence, analyze data, conduct interviews, and carry out surveillance operations when necessary. Our investigations aim to provide our clients with a clear understanding of the situation at hand, enabling them to make informed decisions and take appropriate action. With our expertise and dedication, we strive to deliver reliable and discreet investigative services that bring about resolution and peace of mind."
        uri="/investigations.jpg"
      />
      <ImageCard
        title="Cannine dogs and handlers"
        caption="We specialize in providing highly trained canine sniffer dogs and guard dogs to enhance security measures and ensure peace of mind. Our canine sniffer dogs are expertly trained to detect the presence of narcotics, explosives, or other illicit substances. With their exceptional sense of smell and rigorous training, our sniffer dogs play a vital role in preventing illegal activities and ensuring the safety of our clients' premises or events. Additionally, our professionally trained guard dogs serve as a visible deterrent and a reliable defense against unauthorized access or potential threats. Their obedience, agility, and protective instincts make them an invaluable asset for safeguarding properties, deterring criminal activities, and maintaining a secure environment. By deploying our well-trained and disciplined canine teams, we aim to provide our clients with an enhanced level of security and an added layer of protection."
        uri="/dog-and-handler.jpg"
      />
    </div>
  );
};

export default ServicesSection;
