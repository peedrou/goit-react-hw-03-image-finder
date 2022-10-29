import PropTypes from 'prop-types';

// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import {fetchSearchWord} from 'api';
import {ImageGalleryContainer} from 'components/ImageGallery/ImageGallery.styled'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
// import ErrorSearchView from 'components/ErrorSearch/ErrorSearch';
// import {Loader} from 'components/Loader/Loader'


export const ImageGallery = ({ hits, onClick }) => {
    return (
        <ImageGalleryContainer>
        {hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImage={onClick}
          />
        ))}
      </ImageGalleryContainer>
    );
  };

// export class ImageGallery extends Component {
//     state={
//         hits: [],
//         searchWord: null,
//         page: 1,
//         error:null,
//         // status:'resolved',
//         loading: true,
//         showModal: false,
//         largeImageModal: null,
//     }

   

    // async componentDidUpdate(prevProps, prevState){
    //     const prevSearchWord = prevProps.searchWord;
    //     const nextSearchWord = this.props.searchWord;
    //     const prevPage = prevState.page;
    //     const nextPage = this.state.page;

    //     const BASE_URL = 'https://pixabay.com/api/';
    //     const API_KEY = process.env.REACT_APP_API_KEY;
       
    // if( prevSearchWord !== nextSearchWord ||
    //      prevPage !== nextPage ){
    //     this.setState({ status: 'pending' });

    // try {
    //     const response = await axios.get( BASE_URL, {
    //         params: {
    //           key: API_KEY,
    //           q: nextSearchWord,
    //           image_type: 'photo',
    //           orientation: 'horizontal',
    //           safesearch:true,
    //           per_page: 12,
    //           page: this.state.page,
      
    //         }})
    //     // const hits = await fetchSearchWord(nextSearchWord);
    //     // this.setState({hits: hits , status:'resolved'})
    //     this.setState({hits: response.data.hits , status:'resolved'})
            
    //         // new Error(`Нет данных по запросу ${nextSearchWord}`)
       
    //     }
    //     catch {
    //         toast.error('Something went wrong. Please, reload the page.', {
    //             position: 'top-right',
    //           });
    //         this.setState({ status:'rejected'})
    //         // this.props.error ({error})
    //     }

    // }
        
    // }


    // render() {
    //     const {hits, status} = this.state;

        // if(status === 'idle') {
        //    return <div>Введите запрос!</div>
        // }

        // if(status === 'pending'){
        //     return <Loader />
        //     // <div>Загружаем...</div>
        // }

        // if(status === 'rejected'){
        //     return <ErrorSearchView message = {error} />
        //     // <div>{error.message}</div>
        // }

    //     if(status === 'resolved') {
    //         return (
    //             <ImageGalleryContainer>
    //             {hits.map(({ id, webformatURL, largeImageURL }) => (
    //                 <ImageGalleryItem
    //                 key={id}
    //                 webformatURL={webformatURL}
    //                 largeImageURL={largeImageURL}
    //                 // onClickImage={onClick}
    //                 />
    //             ))}
    //             <ToastContainer autoClose={3000} /> 
               
    //             </ImageGalleryContainer>
               
    //         )
        
    //     }
    // }

    //     return (
    //         <>
    //             {loading && <div>Загружаем...</div>}
    //             {!this.props.searchWord && <div>Введите запрос!</div>}
                
    //             {hits.length > 0 && (
    //         <>
    //         {hits.map(({ id, webformatURL, tags }) => {
    //             return (
    //             <li key={id}>
    //                 <img
    //                     src={webformatURL}
    //                     alt={tags}
    //                     width='350'
    //                     // onClick={() => onImage(largeImageURL, tags, id)}
    //                 />
    //             </li>
    //             )}
    //         )}
    //         </>
    //         )

    //         {error && <div>{error.message}</div>}
               
    //             {/* <ImageGalleryItem hits={hits} /> */}
                
    //         </>
    //     )
    // }

    ImageGallery.propTypes = {
        hits: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
          }),
        ),
        onClick: PropTypes.func.isRequired,
    }