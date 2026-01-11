import PropTypes from 'prop-types';

const Button =({ label, variant, onClick }) => {
    const styles = {
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
        color: 'white',
        fontSize: '16px',
        margin: '5px'
    };

    return (
        <button style={styles} onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
