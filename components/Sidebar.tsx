import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const StyledContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    border-right: 1px solid whitesmoke;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
`;

const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 2px;
`;

const StyledSearchInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
`

const StyledSidebarButton = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    font-weight: 700;
`;

const StyledUserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

export default function Sidebar() {
    return (
        <StyledContainer>
            <StyledHeader>
                <Tooltip title='Hello' placement='right'>
                    <StyledUserAvatar />
                </Tooltip>
                <div>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                </div>
            </StyledHeader>

            <StyledSearch>
                <SearchIcon />
                <StyledSearchInput placeholder='Search in chats' />
            </StyledSearch>

            <StyledSidebarButton>NEW CONVERSATION</StyledSidebarButton>
        </StyledContainer>
    );
}
