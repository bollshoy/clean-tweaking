import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css'
import {Navigation} from 'swiper/modules'
import cpuZ from '../../assets/images/softWare/cpuZ.svg'
import hwinfo from '../../assets/images/softWare/HWiNFO.png'
import hwmontitor from '../../assets/images/softWare/HWMonitor.png'
import occt from '../../assets/images/softWare/OCCT.png'
import speccy from '../../assets/images/softWare/Speccy.png'
import gpuZ from '../../assets/images/softWare/gpu-Z.png'
import Prime95 from '../../assets/images/softWare/Prime95.png'
import mSIAfterburner from '../../assets/images/softWare/MSI Afterburner.png'
import coreTemp from '../../assets/images/softWare/Core Temp.png'
import Footer from '../../components/Footer/Footer.jsx'
import {NavLink} from 'react-router-dom'
import './_SoftWare.scss'

const SoftWare = () => {
	
	return (
		<>
			<section className={'software'}>
				<div className="software__container container">
					<NavLink to={'/'} className={'contentBuy__btn'}>Назад</NavLink>
					<h6 className="software__title">Полезное ПО</h6>
					<p className="software__text">
						На этой странице вы найдете программное обеспечение, которое поможет
						вам мониторить и
						анализировать состояние вашего ПК, проверять стабильность системы,
						разгонять компоненты и
						следить за температурой и производительностью оборудования.
					</p>
					<Swiper
						className={'mySwiper'}
						modules={[Navigation]}
						spaceBetween={40}
						slidesPerView={4}
						navigation
						loop={true}>
						<SwiperSlide>
							<span className="slide__title">CPU-Z</span>
							<img src={cpuZ} alt="" className="slide__img"/>
							<p className="slide__text">
								Информация о процессоре, материнской плате, памяти и графике.
							</p>
							<a href="https://www.softportal.com/getsoft-1504-cpu-z-2.html"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">HWiNFO</span>
							<img src={hwinfo} alt="" className="slide__img"/>
							<p className="slide__text">
								Глубокий анализ аппаратного обеспечения и мониторинг в реальном
								времени.
							</p>
							<a
								href="https://sourceforge.net/projects/hwinfo/files/Windows_Installer/hwi64_810.exe/download"
								className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">HWMonitor</span>
							<img src={hwmontitor} alt="" className="slide__img"/>
							<p className="slide__text">
								Мониторинг температуры и напряжения компонентов компьютера.
							</p>
							<a href="https://www.softportal.com/getsoft-6317-hwmonitor-2.html"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">OCCT</span>
							<img src={occt} alt="" className="slide__img"/>
							<p className="slide__text">
								Тестирование стабильности системы и диагностика проблем с
								питанием.
							</p>
							<a href="https://www.ocbase.com/download/edition:Personal"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">Speccy</span>
							<img src={speccy} alt="" className="slide__img"/>
							<p className="slide__text">
								Детальная информация о внутренностях ПК, включая температуру и
								состояние.
							</p>
							<a href="https://www.softportal.com/getsoft-16134-speccy-2.html"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">GPU-Z</span>
							<img src={gpuZ} alt="" className="slide__img"/>
							<p className="slide__text">
								Информация и мониторинг видеокарты, включая температуру и
								частоты.
							</p>
							<a href="https://www.softportal.com/en/gpu-z/1/getsoft"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">Prime 95</span>
							<img src={Prime95} alt="" className="slide__img"/>
							<p className="slide__text">
								Стресс-тестирование процессора для проверки стабильности
								разгона.
							</p>
							<a href="https://www.softportal.com/getsoft-45734-prime95-2.html"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">MSI Afterburner</span>
							<img src={mSIAfterburner} alt="" className="slide__img"/>
							<p className="slide__text">
								Разгон и мониторинг видеокарты, контроль вентиляторов.
							</p>
							<a
								href="https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1727693687~acl=/*~hmac=644cb897a7b1c20ac0b796fc4718914890af641bf1d0003e3e5ab7b4b312a4cc"
								className="slide__btn">Скачать</a>
						</SwiperSlide>
						<SwiperSlide>
							<span className="slide__title">Core Temp</span>
							<img src={coreTemp} alt="" className="slide__img"/>
							<p className="slide__text">
								Мониторинг температуры процессора с поддержкой различных
								моделей.
							</p>
							<a href="https://www.softportal.com/getsoft-6417-core-temp-2.html"
							   className="slide__btn">Скачать</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
			<Footer/>
		</>
	)
}

export default SoftWare
