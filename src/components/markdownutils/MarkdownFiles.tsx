import AboutMD from '../../markdown/About.md'
import PortfolioMd from '../../markdown/Portfolio.md'
import DefaultMD from '../../markdown/DefaultMd.md'

export const getFile = (name: string) => {
    if (name === 'About') {
        return AboutMD
    }
    if (name === 'Portfolio') {
        return PortfolioMd
    }
    return DefaultMD
}