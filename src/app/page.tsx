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
            <b className="font-semibold">selam, ben enes 👋</b>
            <br />
            girişimciyim
          </Title>

          <p className="text-xl">
            Burada kodlamaya olan aşkımın, girişimcilik maceralarımın ve başarılı(!) projelerimin hikayesini anlatacağım.
          </p>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>

      <Container size="default" className="mt-20">
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
