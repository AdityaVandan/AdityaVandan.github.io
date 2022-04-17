import Image from 'next/image';
import { primaryBackgroundDark } from 'utils/constants/theme';

const Hero = () => {
  return (
    <div className="vertical-align-center hero18Container">
      <div 
        className='pos-rel'
        style={{
          top: -75,
          padding: 20
        }}
        >
          <div>              
            <Image
              src="/aditya.jpg"
              width={160}
              height={160}
              alt="Aditya Vandan Sharma"
              style={{
                borderRadius: '50%'
              }}
            />
          </div>
        <div className="hero18RingInner"/>
      </div>
    </div>
  )
}

export default Hero;
