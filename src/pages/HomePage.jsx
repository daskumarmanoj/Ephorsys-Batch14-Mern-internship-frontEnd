import BrowseMenu from "../components/BrowseMenu"
import FastestFood from "../components/FastestFood"
import HeroSection from "../components/HeroSection"
import Weoffer from "../components/Weoffer"
import WeProvide from "../components/WeProvide"
import WhatOurCustomer from "../components/WhatOurCustomer"

function HomePage() {
  return (
    <>
      <HeroSection />
      <BrowseMenu />
      <WeProvide />
      <Weoffer />
      <FastestFood />
      <WhatOurCustomer />
    </>
  )
}

export default HomePage