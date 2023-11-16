import { selectYears } from "@/store/posts";
import { useSelector } from "react-redux";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router'
import Link from 'next/link'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PostsMenu = () => {
    const router = useRouter()
    const years = useSelector(selectYears);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const maxYear =  Math.max(...years)
    const otherYears = years.filter((year) => year !== maxYear)

    return <div>
        {years.length > 1 && <div>
        <IconButton
            aria-label="more"
            id="years-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            size="small"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="years-button"
            MenuListProps={{
            'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            {otherYears.map((year) => <Link key={year} href={`./${year}`}><MenuItem onClick={handleClose}>{year}</MenuItem></Link>)}
        </Menu>
        </div>}
    </div>
}

export default PostsMenu