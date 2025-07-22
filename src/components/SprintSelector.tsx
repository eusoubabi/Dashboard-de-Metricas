import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Card from "./design/Card";

interface Props {
  selected: string;
  onChange: (value: string) => void;
  options: string[];
}

const SprintSelector = ({ selected, onChange, options }: Props) => {
  return (
    <Card className="px-4 py-2 flex items-center space-x-2 w-full sm:w-auto">
      <span className="text-white font-medium">Sprint:</span>

      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-36 cursor-default rounded bg-zinc-800 py-2 pl-3 pr-10 text-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-36 overflow-auto rounded-md bg-zinc-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {options.map((sprint) => (
                <Listbox.Option
                  key={sprint}
                  value={sprint}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                      active ? "bg-zinc-700 text-white" : "text-white"
                    }`
                  }
                >
                  {sprint}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </Card>
  );
};

export default SprintSelector;
