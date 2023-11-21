import NextImage from "next/image";
import Social from "@/components/social";
import Title from "@/components/title";
import Container from "@/components/container";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">hi, i'm enes 👋</b>
            <br />
            I am an entrepreneur. 
          </Title>

          <p className="text-xl">
            computer engineering student, software developer, entrepreneurial spirit and theoretical physics enthusiast.
          </p>

          <p className="text-xl">
          here I will tell you the story of my love for coding, my entrepreneurial adventures and my successful(!) projects.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>

      <Container size="large" className="mt-20">
        <NextImage
          src="/photos/mdenesfe.png"
          alt="mdenesfe"
          priority
          quality={100}
          width={2406}
          height={1602}
          className="rounded-md saturate-0 transition-all duration-700 hover:saturate-100"
        />
      </Container>
    </>
  );
}
