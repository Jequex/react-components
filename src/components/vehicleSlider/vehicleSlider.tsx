import styled from 'styled-components';
import SwiperComponent from '../swiper/Swiper';

const Button = styled.button({
  backgroundColor: '#FE7A1F',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '600',
  width: '135px',
  height: '40px',
  border: 'none',
  borderRadius: '8px'
})

const Div = styled.div({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#F6F6F6',

  hr: {
    width: '100%'
  },

  img: {
    width: '100%',
    borderRadius: '0'
  }
})

const VehicleSlider = () => {
  const data = [
    {
      title: 'Sedan',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car1.png',
      image_alt: 'Sedan'
    },
    {
      title: 'Electrical Vehicle',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car2.png',
      image_alt: 'Electrical Vehicle'
    },
    {
      title: 'Business',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car3.png',
      image_alt: 'Business'
    },
    {
      title: 'First Class',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car4.png',
      image_alt: 'First Class'
    },
    {
      title: 'Super VIP',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car5.png',
      image_alt: 'Super VIP'
    },
    {
      title: 'Limousine',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car6.png',
      image_alt: 'Limousine'
    },
    {
      title: 'Minivan & SUV',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car7.png',
      image_alt: 'Minivan & SUV'
    },
    {
      title: 'Minibus',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car8.png',
      image_alt: 'Minibus'
    },
    {
      title: 'Coach Bus',
      description: 'Lincoln Continental or Similar',
      sunroof: true,
      airconditioning: true,
      paragraph: 'This is a description paragraph. This is a description paragraph. This is a description paragraph.',
      details: true,
      details_url: 'https://wwww.google.com',
      image_url: 'https://elifelimo.com/img/home/pic_home_car9.png',
      image_alt: 'Coach Bus'
    }
  ]
  return (
  <SwiperComponent>
      {data.map((vehicle) => 
        <Div>
          <img src={vehicle.image_url} alt={vehicle.image_alt} />
          <h5>{vehicle.title}</h5>
          <hr />
          {vehicle.sunroof && <p>▪ ✔ Power panoramic sunroof</p>}
          {vehicle.airconditioning && <p>▪ ✔ Air conditioning</p>}
          {vehicle.paragraph && <p>▪ This is a description paragraph. This is a description paragraph. This is a description paragraph.</p>}
          {vehicle.details && vehicle.details_url && <Button>View Details</Button>}
        </Div>
      )}
      </SwiperComponent>
  )
}

export default VehicleSlider;