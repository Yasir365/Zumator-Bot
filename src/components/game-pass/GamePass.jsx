import swalToastr from '../../services/toastr.service';

export default function GamePass() {

    const buyPass = () => {
        swalToastr('success', 'Game pass purchased successfully')
    }
    return (
        <>
            <div className='game-pass'>
                <div data-bs-toggle="modal" data-bs-target="#gamePassModal">
                    <img src="/images/icons/pass.webp" alt="" />
                </div>
                <div data-bs-toggle="modal" data-bs-target="#gamePassModal" className='pass-2'>
                    <img src="/images/icons/pass2.png" alt="" />
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="gamePassModal" aria-labelledby="gamePassModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>Game Pass</h5>
                            <ul>
                                <li>Game pass gives users a Double reward from the boss reward chest.</li>
                                <li>Ticket generation reduced time to 1 hours.</li>
                                <li>Able to accumulate upto 30 ticket per time.</li>
                                <li>Users doesn’t need to wait to fight a boss again After defeat.</li>
                                <li>Tickets are automatically added to users ticket once ready to claim.</li>
                                <li>User gets 5 diamond 💎 every days they login for 30 days.</li>

                            </ul>
                            <button type="button" className="btn" onClick={buyPass} data-bs-dismiss="modal">Buy</button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}
