import Link from 'next/link';

const FixedBtn = () =>
{
    return (
        <div>
            <div className='fixed-action-btn'>
                <Link href='/create-note'>
                    <a className='btn-floating blue pulse'>
                        <i className='large material-icons'>add</i>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default FixedBtn;
