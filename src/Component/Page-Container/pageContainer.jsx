import { StyledPageContainer } from './pageContainer.style'

const PageContainer = ({ children, className }) => {
    return (
        <StyledPageContainer className={className}>{children}</StyledPageContainer>
    )
}

export default PageContainer