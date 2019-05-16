(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{253:function(e,a,t){"use strict";t.r(a);var o=t(2),s=Object(o.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"basic-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Instructions")]),e._v(" "),t("h2",{attrs:{id:"installing-basic-komodo-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-basic-komodo-software","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Basic Komodo Software")]),e._v(" "),t("p",[e._v("To install the Komodo daemon, "),t("code",[e._v("komodod")]),e._v(", and its necessary counterpart, "),t("code",[e._v("komodo-cli")]),e._v(", the simplest method requires two steps.")]),e._v(" "),t("h4",{attrs:{id:"step-1-macos-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-macos-linux","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1 | MacOS & Linux")]),e._v(" "),t("p",[e._v("Download zcash parameters using the "),t("code",[e._v("fetch-params.sh")]),e._v(" script for "),t("strong",[e._v("Linux and MacOS")]),e._v(" from below.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/jl777/komodo/blob/master/zcutil/fetch-params.sh",target:"_blank",rel:"noopener noreferrer"}},[t("b",[e._v("Link to Zcash-Parameter Download Script")]),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Execute the file in the terminal.")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("/path_to_downloaded_file/fetch-params.sh\n")])])]),t("p",[e._v("The script will automatically download the Zcash parameters on your local machine. This process may take time depending on internet speed.")]),e._v(" "),t("h4",{attrs:{id:"step-one-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-one-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Step One | Windows")]),e._v(" "),t("p",[e._v("For "),t("strong",[e._v("Windows")]),e._v(", you will find the "),t("code",[e._v("fetch-params.bat")]),e._v(" file included inside the zip that you will download in Step 2 below.")]),e._v(" "),t("p",[e._v("Double-click the file to download the Zcash parameters.")]),e._v(" "),t("p",[e._v("Once the Zcash parameters are downloaded, you are prepared to install pre-compiled binaries of the Komodo daemon, "),t("code",[e._v("komodod")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"step-2-all-os-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-all-os-s","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2 | All OS's")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and unzip the pre-compiled executables found here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Once unzipped, the executables do not require installation. Simply find "),t("code",[e._v("komodod")]),e._v(" and "),t("code",[e._v("komodo-cli")]),e._v(" in the directory where you unzipped the files.")]),e._v(" "),t("p",[e._v("You may also build "),t("code",[e._v("komodod")]),e._v(" and "),t("code",[e._v("komodo-cli")]),e._v(" from source. This is not required, but it is considered the best practice. Building from source enables you to receive the latest patches and security upgrades the moment they are pushed to the "),t("code",[e._v("komodod")]),e._v(" source.")]),e._v(" "),t("p",[e._v("You will find "),t("a",{attrs:{href:"https://docs.komodoplatform.com/komodo/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a walkthrough on building from source here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"interacting-with-komodo-chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-komodo-chains","aria-hidden":"true"}},[e._v("#")]),e._v(" Interacting with Komodo Chains")]),e._v(" "),t("p",[e._v("There are two cooperating pieces of software that the user utilizes when running a Komodo-compatible blockchain from the command line.")]),e._v(" "),t("p",[e._v("The first is the coin daemon itself, "),t("code",[e._v("komodod")]),e._v(". This is initiated by calling it from the command line and including any desired runtime parameters. When initiating any Komodo-compatible blockchain other than the main KMD blockchain, the user should always include all parameters used during the asset chain's creation.")]),e._v(" "),t("p",[e._v("Once the software is set up, change into the installation directory.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Note to Windows Users: Replace ./komodod and ./komodo-cli with komodod.exe and komodo-cli.exe for each step.")])]),e._v(" "),t("p",[e._v("To launch the main KMD chain, execute:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodod "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),t("p",[e._v("or")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodod -daemon\n")])])]),t("p",[e._v("After the daemon launches, you may interact with it using "),t("code",[e._v("komodo-cli")]),e._v(" like so:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli API_COMMAND\n")])])]),t("p",[e._v("To launch another Komodo-based blockchain, include the necessary parameters. A list of launch parameters for most of the Komodod-based blockchains in our ecosystem "),t("a",{attrs:{href:"https://github.com/jl777/komodo/blob/master/src/assetchains.old",target:"_blank",rel:"noopener noreferrer"}},[e._v("is found here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For example, to launch the DEX asset chain, execute:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodod -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DEX -ac_supply"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("999999 -addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("78.47.196.146 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("IMPORTANT: Always execute the launch command EXACTLY as indicated, and as the asset-chain's developers instruct. Failure to do so will cause you either to create a new chain, or to connect to another chain. If you make this mistake, you must delete the blockchain data and re-sync using the correct parameters to regain access to the blockchain's network.")])]),e._v(" "),t("p",[e._v("To interact with the DEX daemon, use "),t("code",[e._v("komodo-cli")]),e._v(" like so:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DEX API_COMMAND\n")])])]),t("p",[e._v("Detailed descriptions of all Komodo commands are provided "),t("router-link",{attrs:{to:"/basic-docs/komodo-api/address.html"}},[e._v("here")]),e._v(" and parameters "),t("router-link",{attrs:{to:"/basic-docs/installations/common-runtime-parameters.html#intro-to-parameters-and-settings"}},[e._v("here")]),e._v(".")],1),e._v(" "),t("p",[e._v("Also, in the terminal you can call the Komodo documentation by executing:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v("\n")])])]),t("p",[e._v("To learn more via the terminal about a specific API command, execute:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v(" API_COMMAND\n")])])]),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./komodo-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v(" getnewaddress\n")])])]),t("p",[e._v("For more information about creating and interacting with asset chains, please visit our "),t("router-link",{attrs:{to:"/basic-docs/installations/creating-asset-chains.html"}},[e._v("asset-chain creation documentation")]),e._v(".")],1),e._v(" "),t("p",[e._v("Follow this link to find information on "),t("router-link",{attrs:{to:"/basic-docs/installations/common-runtime-parameters.html#accessing-the-coin-daemon-remotely"}},[e._v("accessing the coin daemon remotely")]),e._v(".")],1),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Typically, a blockchain is vulnerable to double-spend attacks when its hash power is low. A Komodo-based blockchain can be secured against such attacks by enabling the dPoW security service. Please reach out to us when you are ready to purchase.")])]),e._v(" "),t("h2",{attrs:{id:"list-of-asset-chain-launch-parameters-in-the-komodo-ecosystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-asset-chain-launch-parameters-in-the-komodo-ecosystem","aria-hidden":"true"}},[e._v("#")]),e._v(" List of Asset-Chain Launch Parameters in the Komodo Ecosystem")]),e._v(" "),t("p",[e._v("A list of launch parameters for all chains in the Komodo ecosystem is found "),t("a",{attrs:{href:"https://github.com/jl777/komodo/blob/master/src/assetchains.old",target:"_blank",rel:"noopener noreferrer"}},[e._v("at this linked repository."),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"komodo-s-native-dex-barterdex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#komodo-s-native-dex-barterdex","aria-hidden":"true"}},[e._v("#")]),e._v(" Komodo's Native DEX: BarterDEX")]),e._v(" "),t("p",[e._v("Komodo offers a native decentralized-exchange (DEX) compatibility through our software, BarterDEX. This software is separate from "),t("code",[e._v("komodod")]),e._v(" and "),t("code",[e._v("komodo-cli")]),e._v(".")]),e._v(" "),t("p",[e._v("BarterDEX is a pioneer in atomic-swap based exchange methods. If you're not familiar with the concept of atomic-swaps, check out "),t("a",{attrs:{href:"https://komodoplatform.com/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part III of our white paper"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("We performed our first atomic swap in 2014, and using our BarterDEX v1.0 software we performed thousands in 2017 with the open-source community before the concept gained attention in the news. To date, users in the Komodo ecosystem have conducted over 100,000 atomic swaps. We are currently taking what we learned from these experiences and rewriting the software from the ground up for v2.0.")]),e._v(" "),t("p",[e._v("Via our open-source philosophy, anyone is welcome to use BarterDEX without restriction. As it is based on atomic-swap technology, the end-users utilizing BarterDEX maintain ownership of their private keys at all times. Therefore, developers maintaining any cluster of traders utilizing the BarterDEX software are not acting in the capacity of an escrow-service, a trading provider, a centralized exchange, or even a multi-coin decentralized gateway, unlike most other exchanges. This provides significant relief from the developer's technical security responsibilities.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Developers should consult with their local authorities about the legal nature of these decisions.")])]),e._v(" "),t("p",[e._v("Because the BarterDEX software is separate from "),t("code",[e._v("komodod")]),e._v(" and "),t("code",[e._v("komodo-cli")]),e._v(", at this time we do not yet include it in this API documentation. Rather, you may find "),t("a",{attrs:{href:"https://docs.komodoplatform.com/mmV1/api/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API documentation for BarterDEX here"),t("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);a.default=s.exports}}]);