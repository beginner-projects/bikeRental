import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";

export const BlockchainContext = React.createContext("");

export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [ownerBalance, setOwnerBalance] = useState();
  const [renterExists, setRenterExists] = useState();
  const [renter, setRenter] = useState();
  const [renterBalance, setRenterBalance] = useState();
  const [due, setDue] = useState();
  const [duration, setDuration] = useState();
  const [owner, setOwner] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const address = "0xFbF4465872db3133b56F4F47972669251C676405";
  const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "firstName",
          type: "string",
        },
        {
          internalType: "string",
          name: "lastName",
          type: "string",
        },
        {
          internalType: "bool",
          name: "canRent",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "active",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "due",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "start",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "end",
          type: "uint256",
        },
      ],
      name: "addRenter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "balanceOfRenter",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "canRentBike",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "checkIn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "checkOut",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "getDue",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getOwnerBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "getRenter",
      outputs: [
        {
          internalType: "string",
          name: "firstName",
          type: "string",
        },
        {
          internalType: "string",
          name: "lastName",
          type: "string",
        },
        {
          internalType: "bool",
          name: "canRent",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "active",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "getTotalDuration",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "makePayment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "walletAddress",
          type: "address",
        },
      ],
      name: "renterExists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "renters",
      outputs: [
        {
          internalType: "address payable",
          name: "walletAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "firstName",
          type: "string",
        },
        {
          internalType: "string",
          name: "lastName",
          type: "string",
        },
        {
          internalType: "bool",
          name: "canRent",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "active",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "due",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "start",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "end",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawOwnerBalance",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  const contract = new ethers.Contract(address, abi, signer);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metmask");

      const accounts = await provider.send("eth_requestAccounts");
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  

  const getBalance = async () => {
    try {
      if (owner) {
        const contractBalance = await contract.balanceOf();
        setBalance(ethers.utils.formatEther(contractBalance));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOwnerBalance = async () => {
    try {
      if (owner) {
        const contractBalance = await contract.getOwnerBalance();
        setOwnerBalance(ethers.utils.formatEther(contractBalance));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ownerWithdraw = async () => {
    try {
      const ownerBalance = await contract.withdrawOwnerBalance();
      await ownerBalance.wait();
      await getOwnerBalance();
      await getBalance();
    } catch (error) {
      console.log(error);
    }
  };

  const isOwner = async () => {
    try {
      if (currentAccount) {
        const owner = await contract.isOwner();
        setOwner(owner);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkRenterExists = async () => {
    try {
      if (currentAccount) {
        const renter = await contract.renterExists(currentAccount);
        setRenterExists(renter);
        if (renter) {
          await getRenter();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRenter = async () => {
    try {
      if (currentAccount) {
        const renter = await contract.getRenter(currentAccount);
        setRenter(renter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addRenter = async (
    walletAddress,
    firstName,
    lastName,
    canRent,
    active,
    balance,
    due,
    start,
    end
  ) => {
    try {
      const addRenter = await contract.addRenter(
        walletAddress,
        firstName,
        lastName,
        canRent,
        active,
        balance,
        due,
        start,
        end
      );
      await addRenter.wait();
      console.log(`${firstName} added!`);
      checkRenterExists();
    } catch (error) {
      console.log(error);
    }
  };

  const getRenterBalance = async () => {
    try {
      if (currentAccount) {
        const balance = await contract.balanceOfRenter(currentAccount);
        setRenterBalance(ethers.utils.formatEther(balance));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deposit = async (value) => {
    try {
      const bnbValue = ethers.utils.parseEther(value);
      const deposit = await contract.deposit(currentAccount, {
        value: bnbValue,
      });
      await deposit.wait();
      await getRenterBalance();
    } catch (error) {
      console.log(error);
    }
  };

  const getDue = async () => {
    try {
      if (currentAccount) {
        const due = await contract.getDue(currentAccount);
        setDue(ethers.utils.formatEther(due));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalDuration = async () => {
    try {
      if (currentAccount) {
        const totalDuration = await contract.getTotalDuration(currentAccount);
        setDuration(Number(totalDuration));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makePayment = async (value) => {
    try {
      const bnbValue = ethers.utils.parseEther(value);
      const deposit = await contract.makePayment(currentAccount, bnbValue);
      await deposit.wait();
      await getRenter();
      await getRenterBalance();
      await getTotalDuration();
      await getDue();
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const checkOut = async () => {
    try {
      const checkOut = await contract.checkOut(currentAccount);
      await checkOut.wait();
      await getRenter();
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const checkIn = async () => {
    try {
      const checkIn = await contract.checkIn(currentAccount);
      await checkIn.wait();
      await getRenter();
      await getDue();
      await getTotalDuration();
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    checkifWalletIsConnected();
    checkRenterExists();
    getRenterBalance();
    getDue();
    getTotalDuration();
    getOwnerBalance();
    isOwner();
    getBalance();
  }, [currentAccount, owner]);

  return (
    <BlockchainContext.Provider
      value={{
        connectWallet,
        currentAccount,
        renterExists,
        addRenter,
        renterBalance,
        deposit,
        due,
        duration,
        renter,
        makePayment,
        checkOut,
        checkIn,
        ownerBalance,
        ownerWithdraw,
        balance,
        owner,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};
