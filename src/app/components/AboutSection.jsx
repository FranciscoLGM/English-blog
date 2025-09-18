import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center w-full  ">
          <Image
            src="/images/about-image.png"
            width={450}
            height={450}
            alt="About Image"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg mb-4">
            I am a student of Software Analysis and Development at SENA. In my
            program, English is a very important subject. The reason for this
            blog is to show my improvement in English. I will put here the
            different homework I do during my course.
          </p>

          <p className="text-base lg:text-lg mb-4">
            In this blog, I will share activities like texts, audios, videos,
            and mind maps. These activities show how my communication is getting
            better and that I am trying very hard to learn.
          </p>
          <p className="text-base lg:text-lg mb-4">
            My objective is to be better at English. I want to use it for my
            studies now and for my future job in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
