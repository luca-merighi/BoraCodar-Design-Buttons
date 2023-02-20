import './App.css'

import ButtonRow from '../components/ButtonRow/ButtonRow'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'
import {LoadingIcon, DraggIcon} from '../icons/index'
import SecondaryButton from '../components/SecondaryButton/SecondaryButton'


export default function App() {
  return (
    <main className="main">
      <ButtonRow label="Botão Primário">
        <PrimaryButton 
            text="Default Primary" />

        <PrimaryButton 
            text="Hover Primary"
            bgClass="hover" />

        <PrimaryButton 
            text="Focus Primary"
            bgClass="focus" />

        <PrimaryButton 
            text="Disabled Primary"
            bgClass="disabled" />

        <PrimaryButton 
            text="Loading Primary"
            icon={LoadingIcon} />

        <PrimaryButton 
            text="Movable Primary"
            icon={DraggIcon} />
      </ButtonRow>
      
      <ButtonRow label="Botão Secundário">
        <SecondaryButton
          text="Default Secondary" />

        <SecondaryButton 
            text="Hover Primary"
            bgClass="hover" />

        <SecondaryButton 
            text="Focus Primary"
            bgClass="focus" />

        <SecondaryButton 
            text="Disabled Primary"
            bgClass="disabled" />

        <SecondaryButton 
            text="Loading Primary"
            icon={LoadingIcon} />

        <SecondaryButton 
            text="Movable Primary"
            icon={DraggIcon} />
      </ButtonRow>
    </main>
  )
}