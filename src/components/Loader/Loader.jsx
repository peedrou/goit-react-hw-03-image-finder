import {Component} from 'react';
import {Dna} from 'react-loader-spinner'
import {DnaContainer} from './Loader.styled'

export class Loader extends Component {
    render() {
        return (
            <DnaContainer>
                <Dna
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                alignItem="center"
                />
            </DnaContainer>
            
        )
    }  
}
