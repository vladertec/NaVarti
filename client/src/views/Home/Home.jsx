import CurrentFees from "../../components/CurrentFees/CurrentFees"
import DonationDetails from "../../components/DonationDetails/DonationDetails"
import MainTitle from "../../components/MainTitle/MainTitle"
import TransferredThings from "../../components/TransferredThings/TransferredThings"
import OurTeam from "../../components/OurTeam/OurTeam"
import Question from "../../components/Question/Question"
import FeeCard from "../../components/FeeCard/FeeCard"
import Line from "../../components/Line/Line"
import Gallery from "../../components/Gallery/Gallery"

const Home = () => {
  const slideItems = [
    {
      image: "/img/logo.jpg",
      altText: "Description of Image 1",
      caption: "Caption for Image 1",
    },
    {
      image: "/img/logo.jpg",
      altText: "Description of Image 2",
      caption: "Caption for Image 2",
    },
    {
      image: "/img/logo.jpg",
      altText: "Description of Image 3",
      caption: "Caption for Image 3",
    },
  ]

  const donationDetails = [
    {
      description: "Гривня 🇺🇦",
      account: "UA713220010000026006420000559",
    },
    {
      description: "Євро 🇪🇺",
      account: "UA083220010000026006930000630",
    },
    {
      description: "Долар США 🇺🇸",
      account: "UA083220010000026006930000630",
    },
  ]

  const faqData = [
    {
      question: "Як вам подати запит?",
      answer:
        "На сайті ви можете знайти посилання з детальною інструкцією, як правильно подати офіційний запит до фонду Леви на Джипи)",
    },
    {
      question: "Як довго чекати на допомогу?",
      answer:
        "Час очікування на допомогу може варіюватися залежно від багатьох факторів...",
    },
  ]

  const inventoryItems = [
    { name: "Генератори", quantity: "24 шт." },
    { name: "Генератори", quantity: "24 шт." },
    { name: "Аптечка", quantity: "70 шт." },
    { name: "Аптечка", quantity: "70 шт." },
    { name: "Генератори", quantity: "24 шт." },
    { name: "Генератори", quantity: "24 шт." },
    { name: "Аптечка", quantity: "70 шт." },
    { name: "Аптечка", quantity: "70 шт." },
    { name: "Генератори", quantity: "24 шт." },
    { name: "Генератори", quantity: "24 шт." },
    { name: "Аптечка", quantity: "70 шт." },
    { name: "Аптечка", quantity: "70 шт." },
  ]

  const feeData = [
    {
      title: "Підзаголовок",
      text: "Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1",
    },
    {
      title: "Підзаголовок",
      text: "Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2",
    },
    {
      title: "Підзаголовок",
      text: "Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3",
    },
    {
      title: "Підзаголовок",
      text: "Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1Текст1",
    },
    {
      title: "Підзаголовок",
      text: "Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2Текст2",
    },
    {
      title: "Підзаголовок",
      text: "Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3Текст3",
    },
  ]

  const photos = [
    { src: "path_to_photo_1.jpg", alt: "Опис фото 1" },
    { src: "path_to_photo_2.jpg", alt: "Опис фото 2" },
    { src: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { src: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { src: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { src: "path_to_photo_N.jpg", alt: "Опис фото N" },
  ]

  return (
    <div className="home">
      <MainTitle />
      <TransferredThings items={inventoryItems} />
      <CurrentFees feeData={feeData} />
      <Line />
      <DonationDetails details={donationDetails} />
      <Line />
      <Gallery photos={photos} />
      <Question faq={faqData} />

      {/* <FeeCard  /> */}
      {/* <OurTeam items={slideItems} /> */}
    </div>
  )
}

export default Home
