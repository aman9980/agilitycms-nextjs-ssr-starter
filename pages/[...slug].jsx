import Layout from "components/common/Layout";
import { getModule } from "components/agility-pageModules";
import SiteHeader from "components/common/SiteHeader";


export async function getServerSideProps({ params, req, res, query, preview, resolvedUrl, locale, locales, defaultLocale }) {

	try {

		process.env.AGILITY_GUID="8a4376e4-u"
		process.env.AGILITY_API_FETCH_KEY="defaultlive.50dbc3b0b922c1ac7e02f1bba112c85fd1e88848240b9d2371682415e179aeaf"
		process.env.AGILITY_API_PREVIEW_KEY="defaultpreview.fa2cc7b05bebbb8513814a752b8e3f144911e7aecdb3b996c50daeda83941f96"
		process.env.AGILITY_SECURITY_KEY="cgBnAFEATwBDAGUAbABiAC0ANgA5ADgAMgA2ADgAMQA2AC0AQQBEADAARAAtADQAOAA0AEIALQBCADMAQgAyAC0ARgA5ADYAQgA1ADAARABBADkAQgA3AEYA"


		process.env.AGILITY_LOCALES="en-us"
		process.env.AGILITY_SITEMAP="website"


		if (!preview) {
			res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59')
		}

		//import { getAgilityPageProps  } from "@agility/nextjs/node";
		let { getAgilityPageProps } = require("@agility/nextjs/node")


		//place all global here
		const globalComponents = {
			header: SiteHeader,
		};

		const agilityProps = await getAgilityPageProps({
			preview,
			params,
			locale,
			getModule,
			defaultLocale,
			globalComponents,
		});

		if (!agilityProps) {
			// We throw to make sure this fails at build time as this is never expected to happen
			throw new Error(`Page not found`);
		}


		return {
			// return all props
			props: agilityProps
		};
	} catch (error) {
		return {
			props: {
				error: `An error occurred: ${error}`
			}
		}
	}
}

// // Next.js will statically pre-render all the paths from Agility CMS
// export async function getStaticPaths({ locales, defaultLocale }) {
// 	//get the paths configured in agility
// 	let agilityPaths = await getAgilityPaths({
// 		preview: false,
// 		locales,
// 		defaultLocale,
// 	});

// 	return {
// 		paths: agilityPaths,
// 		fallback: true,
// 	};
// }

const AgilityPage = (props) => {
	return JSON.stringify(props, )
	//return <Layout {...props} />;
};

export default AgilityPage;
