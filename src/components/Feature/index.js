import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Platillo del Día</h1>
      <p>Pollo Tandori.</p>
      <FeatureButton>Ordena Ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;