import { React } from 'react'
import { InfoBox } from '../../components/InfoBox/InfoBox'
import { LandingComponent } from '../../components/LandingComponent/LandingComponent'
import { Navigation } from '../../components/Navigation/Navigation'

export const Info = () => {
    return (
        <div className="landingpage">
           <Navigation/>
           <InfoBox/>
        </div>
    )
}