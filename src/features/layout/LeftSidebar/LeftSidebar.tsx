// Third-party imports
import { useDispatch } from 'react-redux';

// Global imports
import '@/styles/App.scss'
import { resetChessboard } from '@/redux/chessboardSlice';
import { Credits } from '@/features/layout'

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface LeftSidebarProps {
    selectedFeature: number
    setSelectedFeature: any
    setNotation: any
    setIsWrongNotation: any
    setCurrentSelected: any
}

const LeftSidebar = ({ selectedFeature, setSelectedFeature, setNotation, setIsWrongNotation, setCurrentSelected }: LeftSidebarProps) => {
    const dispatch = useDispatch();
    return (
        <div className='leftSidebar'>
            <div>
                <h1>Chess game simulator</h1>
                <h2>Select the feature you want to use below.</h2>
                <div className={'feature ' + (selectedFeature === 0 ? 'selected-feature' : '')} onClick={() => { if (selectedFeature === 1) { setSelectedFeature(1 - selectedFeature); dispatch(resetChessboard()); setNotation(''); setIsWrongNotation(false); setCurrentSelected(0); } }}>
                    <h3>Transcribe moves to algebraic notation</h3>
                    {/* Here is the description */}
                    <p>Standard Algebraic Notation (SAN) is a method for recording and
                        describing moves in a game of chess, recognized by the
                        international chess governing body FIDE. This app lets you play a
                        game on the adjacent chessboard, and obtain the corresponding
                        notation at the right.</p>
                </div>
                <div className={'feature ' + (selectedFeature === 1 ? 'selected-feature' : '')} onClick={() => { if (selectedFeature === 0) { setSelectedFeature(1 - selectedFeature); dispatch(resetChessboard()) } }}>
                    <h3>Play recorded notation of a game</h3>
                    <p>This feature lets you input the notation for a given game and
                        walk through it using the controls provided on the right. Programmed
                        logic makes sure you can only input valid game notations.</p>
                </div>
            </div>

            <Credits />
        </div >
    )
}

export default LeftSidebar
