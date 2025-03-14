import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#15100f] text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Use cases</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/support-for-customers" className="hover:text-white transition-colors">For customers</Link></li>
              <li><Link href="/support-for-agents" className="hover:text-white transition-colors">For support agents</Link></li>
              <li><Link href="/support-for-leaders" className="hover:text-white transition-colors">For support leaders</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/fin" className="hover:text-white transition-colors">Fin AI Agent</Link></li>
              <li><Link href="/customer-service-platform/omnichannel" className="hover:text-white transition-colors">Omnichannel</Link></li>
              <li><Link href="/customer-service-platform/help-center" className="hover:text-white transition-colors">Help center</Link></li>
              <li><Link href="/customer-service-platform/inbox" className="hover:text-white transition-colors">Inbox</Link></li>
              <li><Link href="/support-for-agents/ai-copilot" className="hover:text-white transition-colors">Copilot</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/customers" className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><a href="mailto:team@intercom.com" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/watch-demo" className="hover:text-white transition-colors">Watch a demo</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="/developers" className="hover:text-white transition-colors">Developers</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Customers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/customers/anthropic" className="hover:text-white transition-colors">Anthropic</Link></li>
              <li><Link href="/customers/lightspeed" className="hover:text-white transition-colors">Lightspeed</Link></li>
              <li><Link href="/customers/atlassian" className="hover:text-white transition-colors">Atlassian</Link></li>
              <li><Link href="/customers/coda" className="hover:text-white transition-colors">Coda</Link></li>
              <li><Link href="/customers" className="hover:text-white transition-colors">View all</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="/security" className="text-sm text-gray-400 hover:text-white transition-colors">Security</Link>
          </div>

          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Intercom Clone
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
