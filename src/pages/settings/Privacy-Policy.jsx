import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className='settings-pages pe-3 ps-3'>
            <h3 className='heading'>Privacy Policy</h3>

            <p className='mt-4'>Zumator ("we", "our", or "us") operates the Telegram Mini App Bot ("the Bot"). This Privacy Policy informs you about how we collect, use, and protect your personal information when you interact with our Bot. By using our Bot, you agree to the collection and use of information in accordance with this policy.</p>

            <h4 className='mt-2'>Information We Collect</h4>
            <p>We may collect the following types of information:</p>

            <h6 className='mt-3'>Personal Information:</h6>
            <p>We do not collect personal information unless you explicitly provide it to us. Personal information may include:</p>
            <li className='mt-2'>Telegram username</li>
            <li> Telegram user ID </li>
            <li> Any data you choose to share with the Bot during interactions</li>

            <h6 className='mt-3'>Non-Personal Information:</h6>
            <p>We may collect non-personal data related to the use of our Bot, such as:</p>
            <li>Usage statistics (e.g., the number of messages sent)</li>
            <li>Interaction logs (e.g., commands used)</li>
            <li>Device and browser information</li>

            <h6 className='mt-3'>How We Use Your Information</h6>
            <p>We may use the information collected for the following purposes:</p>
            <li>To improve the functionality and features of the Bot</li>
            <li>To provide support and respond to your inquiries</li>
            <li>To analyze usage patterns and improve user experience</li>

            <h6 className='mt-3'>Information Sharing and Disclosure</h6>
            <p>We do not sell, trade, or share your personal information with third parties, except in the following situations:</p>
            <li><strong>With your consent:</strong> We may share your information if you give us explicit permission to do so.</li>
            <li><strong>Legal compliance:</strong> We may share your information if required by law or to protect our rights.</li>

            <h6 className='mt-3'>Your Rights</h6>
            <p>You have the right to:</p>
            <li>Access the personal information we have about you.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Withdraw your consent at any time if you no longer wish to use the Bot.</li>

        </div >
    )
}
