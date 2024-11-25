import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import { languageResources } from '../../global/languages/language-resource'

const LanguageLists = ({onPress, state, setState,...props}) => {
  return (
    <FlatList
    data={Object.keys(languageResources)}
    renderItem={({item})=> 
      <SecondaryButton title={item} width={0.2} height={0.04} onPress={()=>{
        props.i18next.changeLanguage(item);
        setState(!state);
      }}/>
    }
    />
  )
}

export default LanguageLists