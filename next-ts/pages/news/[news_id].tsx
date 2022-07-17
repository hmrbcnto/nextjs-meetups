import React, { FunctionComponent } from 'react';
import { useRouter, NextRouter } from 'next/router';

const DetailPage: FunctionComponent = () => {
	const router: NextRouter = useRouter();

	return(
		<div>
			News Detail Page
		</div>
	)
}

export default DetailPage;