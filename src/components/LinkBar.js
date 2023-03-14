import { SmallButton } from './SmallButton'

export const LinkBar = () => {
    return (
        <div className='link-bar'>
            <SmallButton text='Github' link='https://github.com/zoeferencova/basic-bar-chart' icon='github' />
            <SmallButton text='Data source' link='https://population.un.org/wpp/Download/Standard/Population/' icon='table-regular' />
        </div>
    )
};
