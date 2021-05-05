import ReactGA from 'react-ga';

/**
 * Outbound link that handles firing google analytics events
 */
export function ExternalLink({
    target = '_blank',
    href,
    rel = 'noopener noreferrer',
    ...rest
}) {
    const handleClick = (event) => {
        // don't prevent default, don't redirect if it's a new tab
        if (target === '_blank' || event.ctrlKey || event.metaKey) {
            ReactGA.outboundLink({ label: href }, () => {
                console.debug('Fired outbound link event', href)
            })
        } else {
            event.preventDefault()
            // send a ReactGA event and then trigger a location change
            ReactGA.outboundLink({ label: href }, () => {
                window.location.href = href
            })
        }
    }

    // eslint-disable-next-line
    return <a
        target={target}
        rel={rel}
        href={href}
        onClick={handleClick}
        {...rest}
    ></a>
}
