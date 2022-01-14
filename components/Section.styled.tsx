import styled from 'styled-components'

interface ISectionContainer {}

const SectionContainer = styled.div<ISectionContainer>``

interface ISectionTitleContainer {}

const SectionTitleContainer = styled.h2<ISectionTitleContainer>``

interface ISectionContentContainer {}

const SectionContentContainer = styled.div<ISectionContentContainer>``

export { SectionContainer, SectionTitleContainer, SectionContentContainer }
