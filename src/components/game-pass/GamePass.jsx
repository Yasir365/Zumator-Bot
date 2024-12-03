import swalToastr from '../../services/toastr.service';

export default function GamePass() {

    const buyPass = () => {
        swalToastr('success', 'Game pass purchased successfully')
    }
    return (
        <>
            <div className='game-pass'>
                <div onClick={buyPass}>
                    <img src="/images/icons/pass.webp" alt="" />
                </div>
                <div className='pass-2' onClick={buyPass}>
                    <img src="/images/icons/pass2.png" alt="" />
                </div>
            </div>
        </>


    )
}
