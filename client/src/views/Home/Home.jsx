import DonationDetails from "../../components/DonationDetails/DonationDetails"
import MainTitle from "../../components/MainTitle/MainTitle"
import TransferredThings from "../../components/TransferredThings/TransferredThings"
import Question from "../../components/Question/Question"
import Line from "../../components/Line/Line"
import Gallery from "../../components/Gallery/Gallery"
import OurTeam from "../../components/OurTeam/OurTeam"
import MakeRequest from "../../components/MakeRequest/MakeRequest"
import CurrentReport from "../../components/CurrentReport/CurrentReport"
import CurrentFee from "../../components/CurrentFee/CurrentFee"
import Partners from "../../components/Partners/Partners"
import Volunteers from "../../components/Volunteers/Volunteers"

const Home = () => {
  const slideItems = [
    {
      image: "./img/logo.jpg",
      altText: "Description of Image 1",
      caption: "Caption for Image 1",
    },
    {
      image: "./img/logo.jpg",
      altText: "Description of Image 2",
      caption: "Caption for Image 2",
    },
    {
      image: "./img/logo.jpg",
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

  const PositionItems = [
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      position: "Boss",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 кст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      position: "Boss",
      text: "Текст 1Текст1 Текст1Текст 1Текст1 Текст1Текс т1Текст1Т екст1Текст1Текст1 Текст1Текст1Т екст1Текст1Т екст1Текст1Тек ст1Текст1Текст1",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      position: "Boss",
      text: "Текст 1Текст1 Текст1Текст 1Текст1 Текст1Текс т1Текст1Т екст1Текст1Текст1 Текст1Текст1Т екст1Текст1Т екст1Текст1Тек ст1Текст1Текст1",
    },
  ]

  const RequestItems = [
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
    },
    {
      photoUrl: "./img/logo.jpg",
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
    },
  ]

  const photos = [
    { photoUrl: "path_to_photo_1.jpg", alt: "Опис фото 1" },
    { photoUrl: "path_to_photo_2.jpg", alt: "Опис фото 2" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_3.jpg", alt: "Опис фото 3" },
    { photoUrl: "path_to_photo_N.jpg", alt: "Опис фото N" },
  ]

  return (
    <div className="home">
      <MainTitle />
      <CurrentFee />
      <OurTeam PositionItems={PositionItems} />
      <Volunteers RequestItems={RequestItems} />
      <Line />
      <CurrentReport />
      <div className="home__line">
        <Line />
      </div>
      <MakeRequest RequestItems={RequestItems} />
      <Line />
      <TransferredThings items={inventoryItems} />
      <div className="home__line">
        <Line />
      </div>
      <DonationDetails details={donationDetails} />
      <div className="home__line">
        <Line />
      </div>
      <Gallery photos={photos} />
      <Question faq={faqData} />
      <Partners />
    </div>
  )
}

export default Home
